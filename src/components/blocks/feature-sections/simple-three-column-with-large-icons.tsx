"use client";

import { Waves, Compass, Anchor, Lightbulb, Target, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";

const services = [
  {
    name: "Website Creation",
    description: "Custom websites that make waves in your industry",
    icon: Waves,
    details:
      "Professional, responsive websites built with modern technologies. We create digital experiences that engage your audience and drive conversions.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Modern UI/UX",
    ],
  },
  {
    name: "Social Media Management",
    description: "Navigate social currents with expert management",
    icon: Compass,
    details:
      "Comprehensive social media strategy and management across all platforms. We help you build a strong online presence and engage with your audience.",
    features: [
      "Content Planning",
      "Community Management",
      "Analytics",
      "Growth Strategy",
    ],
  },
  {
    name: "Content Creation",
    description: "Compelling content that flows naturally to your audience",
    icon: Lightbulb,
    details:
      "High-quality content that tells your story and connects with your audience. From blog posts to social media content, we create content that converts.",
    features: ["Blog Writing", "Social Posts", "Video Content", "Copywriting"],
  },
  {
    name: "Ad Generation",
    description: "Targeted advertising that catches the right fish",
    icon: Target,
    details:
      "Strategic advertising campaigns that reach your ideal customers. We optimize for maximum ROI and help you scale your business effectively.",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
  },
  {
    name: "Digital Marketing",
    description: "Strategic marketing that creates ripple effects",
    icon: Zap,
    details:
      "Complete digital marketing solutions that drive growth. We combine strategy, creativity, and data to deliver measurable results.",
    features: ["SEO", "Email Marketing", "PPC", "Analytics"],
  },
  {
    name: "Brand Strategy",
    description: "Build a brand that stands out in the digital sea",
    icon: Anchor,
    details:
      "Comprehensive brand strategy that differentiates you from competitors. We help you establish a strong brand identity and market position.",
    features: [
      "Brand Identity",
      "Market Research",
      "Brand Guidelines",
      "Positioning",
    ],
  },
];

export default function SimpleThreeColumnWithLargeIcons() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const shouldAnimateHeader = useOneTimeAnimation("services-header");
  const shouldAnimateServices = useOneTimeAnimation("services-grid");

  const handleServiceClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <div
      id="services"
      className="relative bg-secondary py-24 sm:py-32 overflow-hidden"
    >
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q250,150 500,100 T1000,100 L1000,0 L0,0 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            shouldAnimateHeader ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl font-[var(--font-display)]">
            Our Services
          </h2>
          <p className="mt-6 text-lg/8 text-foreground font-[var(--font-body)]">
            Comprehensive digital solutions to help your business thrive in the
            digital ocean.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  shouldAnimateServices
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0 }
                }
                transition={{
                  duration: 0.8,
                  delay: shouldAnimateServices ? index * 0.1 : 0,
                }}
                className="flex flex-col"
              >
                <dt className="text-base/7 font-semibold text-primary font-[var(--font-display)]">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 transition-colors cursor-pointer">
                    <service.icon
                      aria-hidden="true"
                      className="size-6 text-primary-foreground"
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-foreground font-[var(--font-body)]">
                  <p className="flex-auto">{service.description}</p>

                  {selectedService === index && (
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 200 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-accent/30 rounded-lg border border-accent"
                    >
                      <p className="text-sm text-foreground mb-3">
                        {service.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <p className="mt-6">
                    <button
                      onClick={() => handleServiceClick(index)}
                      className="text-sm/6 font-semibold text-primary hover:text-primary/80 font-[var(--font-body)] transition-colors"
                    >
                      {selectedService === index ? "Show less" : "Learn more"}{" "}
                      <span aria-hidden="true">→</span>
                    </button>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
