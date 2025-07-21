"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";
import { smoothScrollTo } from "@/app/lib/smooth-scroll";

const tiers = [
  {
    id: "starter",
    name: "Starter Wave",
    price: "$2,999",
    description:
      "Perfect for small businesses ready to make their first splash",
    features: [
      "Basic website",
      "Social media management (2 platforms)",
      "Monthly content creation (8 posts)",
      "Basic analytics",
    ],
    featured: false,
    cta: "Start Your Journey",
  },
  {
    id: "rising",
    name: "Rising Tide",
    price: "$4,999",
    description: "Comprehensive solutions for growing businesses",
    features: [
      "Custom website",
      "Social media management (4 platforms)",
      "Bi-weekly content creation (16 posts)",
      "Ad generation",
      "Monthly strategy calls",
      "Advanced analytics",
    ],
    featured: true,
    cta: "Ride the Wave",
  },
  {
    id: "mastery",
    name: "Ocean Mastery",
    price: "$7,999",
    description: "Full-service digital dominance for established companies",
    features: [
      "Premium website with ongoing updates",
      "Social media management (6 platforms)",
      "Weekly content creation (24 posts)",
      "Advanced ad campaigns",
      "Weekly strategy calls",
      "Comprehensive reporting",
      "Priority support",
    ],
    featured: false,
    cta: "Master the Ocean",
  },
];

export default function ThreeTiersWithEmphasizedTier() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const shouldAnimateHeader = useOneTimeAnimation("pricing-header");
  const shouldAnimateCards = useOneTimeAnimation("pricing-cards");

  const handleTierSelection = (tierId: string) => {
    setSelectedTier(tierId);
    // Scroll to contact form with enhanced animation
    smoothScrollTo("contact", {
      offset: 80,
      duration: 1200, // Increased duration for more noticeable animation
      easing: "ease-in-out",
      onStart: () => {
        console.log("Starting scroll to contact form");
      },
      onComplete: () => {
        console.log("Completed scroll to contact form");
      },
    });
  };

  return (
    <div
      id="pricing"
      className="bg-gradient-to-br from-secondary via-accent to-secondary py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            shouldAnimateHeader ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-base/7 font-semibold text-primary font-[var(--font-display)]">
            Pricing
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-6xl font-[var(--font-display)]">
            Pricing Plans
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            shouldAnimateHeader ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.8, delay: shouldAnimateHeader ? 0.2 : 0 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8 font-[var(--font-body)]"
        >
          Choose the perfect plan to navigate your digital journey.
        </motion.p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                shouldAnimateCards
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              transition={{
                duration: 0.8,
                delay: shouldAnimateCards ? index * 0.1 : 0,
              }}
              data-featured={tier.featured ? "true" : undefined}
              className="group/tier relative rounded-3xl p-8 backdrop-blur-sm bg-card/70 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 data-featured:bg-primary/10 data-featured:border-primary/30 data-featured:shadow-2xl data-featured:scale-105 xl:p-10"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card/20 to-accent/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <h3
                  id={`tier-${tier.id}`}
                  className="text-lg/8 font-semibold text-primary group-data-featured/tier:text-primary font-[var(--font-display)]"
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm/6 text-muted-foreground group-data-featured/tier:text-foreground font-[var(--font-body)]">
                  {tier.description}
                </p>

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-primary group-data-featured/tier:text-primary font-[var(--font-display)]">
                    {tier.price}
                  </span>
                  <span className="text-sm/6 font-semibold text-muted-foreground group-data-featured/tier:text-foreground font-[var(--font-body)]">
                    /month
                  </span>
                </p>

                <button
                  onClick={() => handleTierSelection(tier.id)}
                  className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-[var(--font-body)] transition-all duration-200 ${
                    selectedTier === tier.id
                      ? "bg-green-500 text-white"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  } group-data-featured/tier:bg-primary group-data-featured/tier:text-primary-foreground group-data-featured/tier:hover:bg-primary/90`}
                >
                  {selectedTier === tier.id ? "Selected!" : tier.cta}
                </button>

                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-muted-foreground group-data-featured/tier:text-foreground xl:mt-10 font-[var(--font-body)]"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-primary group-data-featured/tier:text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedTier && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-primary font-semibold">
              Great choice! Scroll down to get started with your{" "}
              {tiers.find((t) => t.id === selectedTier)?.name} plan.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
