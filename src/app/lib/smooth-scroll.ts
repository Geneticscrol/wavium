export interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  easing?: 'ease-in-out' | 'ease-in' | 'ease-out' | 'linear';
  behavior?: 'smooth' | 'auto';
  onStart?: () => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
}

export interface ScrollTarget {
  element: HTMLElement;
  targetPosition: number;
}

// Enhanced easing functions for smoother animation
const easingFunctions = {
  linear: (t: number) => t,
  'ease-in': (t: number) => t * t * t,
  'ease-out': (t: number) => 1 - Math.pow(1 - t, 3),
  'ease-in-out': (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

// Default options with longer duration for more noticeable animation
const defaultOptions: Required<SmoothScrollOptions> = {
  offset: 0,
  duration: 1000, // Increased from 600 to 1000ms for more noticeable scrolling
  easing: 'ease-in-out',
  behavior: 'smooth',
  onStart: () => {},
  onComplete: () => {},
  onError: () => {},
};

// Utility to get element by ID or return if already an element
function getTargetElement(target: string | HTMLElement): HTMLElement | null {
  if (typeof target === 'string') {
    // Handle both with and without # prefix
    const id = target.startsWith('#') ? target.slice(1) : target;
    return document.getElementById(id);
  }
  return target instanceof HTMLElement ? target : null;
}

// Calculate the target scroll position
function calculateTargetPosition(element: HTMLElement, offset: number): number {
  const elementRect = element.getBoundingClientRect();
  const currentScrollY = window.scrollY || document.documentElement.scrollTop;
  const targetPosition = elementRect.top + currentScrollY - offset;
  
  // Ensure we don't scroll beyond the document bounds
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  return Math.max(0, Math.min(targetPosition, maxScroll));
}

// Get scroll target information
function getScrollTarget(target: string | HTMLElement, offset: number): ScrollTarget | null {
  const element = getTargetElement(target);
  
  if (!element) {
    return null;
  }
  
  const targetPosition = calculateTargetPosition(element, offset);
  return { element, targetPosition };
}

// Enhanced animation with better frame timing
function animateScroll(
  startPosition: number,
  targetPosition: number,
  duration: number,
  easing: keyof typeof easingFunctions,
  onComplete: () => void
): void {
  const distance = targetPosition - startPosition;
  const startTime = performance.now();
  let animationId: number;
  
  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = easingFunctions[easing](progress);
    const currentPosition = startPosition + distance * easedProgress;
    
    // Use smooth scrolling with better browser compatibility
    if (window.scrollTo) {
      window.scrollTo({
        top: currentPosition,
        behavior: 'auto' // We handle the animation ourselves
      });
    } else {
      // Fallback for older browsers
      document.documentElement.scrollTop = currentPosition;
      document.body.scrollTop = currentPosition;
    }
    
    if (progress < 1) {
      animationId = requestAnimationFrame(step);
    } else {
      onComplete();
    }
  }
  
  animationId = requestAnimationFrame(step);
  
  // No cleanup function needed since the return type is void
}

// Check if smooth scrolling is supported
function isSmoothScrollSupported(): boolean {
  return 'scrollBehavior' in document.documentElement.style;
}

// Main smooth scroll function - always use custom animation for consistency
export function smoothScrollTo(
  target: string | HTMLElement,
  userOptions: SmoothScrollOptions = {}
): void {
  // Validate input
  if (!target) {
    const error = new Error('Target parameter is required');
    console.error(error);
    return;
  }
  
  // Merge options with defaults
  const options = { ...defaultOptions, ...userOptions };
  
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      const error = new Error('smooth-scroll: window is not defined (SSR environment)');
      options.onError(error);
      return;
    }
    
    // Disable native smooth scrolling temporarily to prevent conflicts
    const originalBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    const scrollTarget = getScrollTarget(target, options.offset);
    
    if (!scrollTarget) {
      const error = new Error(`Element not found: ${target}`);
      options.onError(error);
      return;
    }
    
    const startPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Don't animate if we're already at the target position
    if (Math.abs(startPosition - scrollTarget.targetPosition) < 1) {
      options.onComplete();
      return;
    }
    
    options.onStart();
    
    // Always use custom animation for consistent behavior
    const cleanup = animateScroll(
      startPosition,
      scrollTarget.targetPosition,
      options.duration,
      options.easing,
      () => {
        // Restore original scroll behavior
        document.documentElement.style.scrollBehavior = originalBehavior;
        options.onComplete();
      }
    );
    
  } catch (error) {
    const scrollError = error instanceof Error ? error : new Error('Unknown error occurred');
    options.onError(scrollError);
    console.error('smooth-scroll error:', scrollError);
  }
}

// Utility to scroll to top with enhanced animation
export function scrollToTop(userOptions: SmoothScrollOptions = {}): void {
  const options = { ...defaultOptions, ...userOptions };
  
  options.onStart();
  
  const startPosition = window.scrollY || document.documentElement.scrollTop;
  
  // Don't animate if we're already at the top
  if (startPosition < 1) {
    options.onComplete();
    return;
  }
  
  // Disable native smooth scrolling temporarily
  const originalBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  
  animateScroll(
    startPosition, 
    0, 
    options.duration, 
    options.easing, 
    () => {
      // Restore original scroll behavior
      document.documentElement.style.scrollBehavior = originalBehavior;
      options.onComplete();
    }
  );
}

// Utility to check if element is in viewport
export function isElementInViewport(element: HTMLElement, offset: number = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get all scrollable sections on the page
export function getScrollableSections(): NodeListOf<HTMLElement> {
  return document.querySelectorAll('[id]');
}

// Utility to get the currently active section based on scroll position
export function getCurrentSection(offset: number = 0): HTMLElement | null {
  const sections = getScrollableSections();
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + scrollY;
    
    if (scrollY >= sectionTop - offset) {
      return section;
    }
  }
  
  return null;
}

// Export types for external use
