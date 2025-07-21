"use client";

import React, { useEffect } from "react";

// Import components normally - if there are issues, they'll be more visible
import { ModernHeroWithGradients } from "@/components/blocks/heros/modern-hero-with-gradients";
import SimpleThreeColumnWithLargeIcons from "@/components/blocks/feature-sections/simple-three-column-with-large-icons";
import ThreeColumnBentoGridLight from "@/components/blocks/bento-grids/three-column-bento-grid-light";
import { TestimonialsGridWithCenteredCarousel } from "@/components/blocks/testimonials/testimonials-grid-with-centered-carousel";
import ThreeTiersWithEmphasizedTier from "@/components/blocks/pricing/three-tiers-with-emphasized-tier";
import { ContactFormGridWithDetails } from "@/components/blocks/contact-forms/contact-form-grid-with-details";
import { SimpleFooterWithFourGrids } from "@/components/blocks/footers/simple-footer-with-four-grids";

export default function HomePage() {
  useEffect(() => {
    try {
      // Disable native smooth scrolling to prevent conflicts with custom implementation
      if (typeof document !== "undefined") {
        document.documentElement.style.scrollBehavior = "auto";
      }
    } catch (error) {
      console.error("Error setting scroll behavior:", error);
    }

    // Cleanup function
    return () => {
      try {
        if (typeof document !== "undefined") {
          document.documentElement.style.scrollBehavior = "";
        }
      } catch (error) {
        console.error("Error cleaning up scroll behavior:", error);
      }
    };
  }, []);

  return (
    <main id="home" className="min-h-screen">
      <ModernHeroWithGradients />
      <SimpleThreeColumnWithLargeIcons />
      <ThreeColumnBentoGridLight />
      <TestimonialsGridWithCenteredCarousel />
      <ThreeTiersWithEmphasizedTier />
      <ContactFormGridWithDetails />
      <SimpleFooterWithFourGrids />
    </main>
  );
}
