import { useRef, useEffect, useState } from 'react';

// Global state to track triggered animations across the entire application
const triggeredAnimations = new Set<string>();

// Flag to track if we've set up the beforeunload listener
let isUnloadListenerSet = false;

export const useOneTimeAnimation = (animationKey: string): boolean => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const hasCheckedRef = useRef<boolean>(false);

  useEffect(() => {
    // Set up the beforeunload listener only once globally
    if (!isUnloadListenerSet) {
      const handleBeforeUnload = () => {
        triggeredAnimations.clear();
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      isUnloadListenerSet = true;
    }

    // Check if this animation should run only once per hook instance
    if (!hasCheckedRef.current) {
      hasCheckedRef.current = true;
      
      if (!triggeredAnimations.has(animationKey)) {
        triggeredAnimations.add(animationKey);
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    }
  }, [animationKey]);

  return shouldAnimate;
};

// Optional: Export a function to manually reset all animations (for testing purposes)
export const resetAllAnimations = (): void => {
  triggeredAnimations.clear();
};

// Optional: Export a function to check if an animation has been triggered
export const hasAnimationTriggered = (animationKey: string): boolean => {
  return triggeredAnimations.has(animationKey);
};

// Optional: Export a function to manually mark an animation as triggered
export const markAnimationAsTriggered = (animationKey: string): void => {
  triggeredAnimations.add(animationKey);
};