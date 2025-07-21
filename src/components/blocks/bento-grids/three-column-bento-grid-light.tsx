"use client";

import {
  Users,
  TrendingUp,
  Settings,
  Headphones,
  DollarSign,
  Award,
} from "lucide-react";
import { motion } from "motion/react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";

export default function ThreeColumnBentoGridLight() {
  const shouldAnimateHeader = useOneTimeAnimation("about-header");
  const shouldAnimateCards = useOneTimeAnimation("about-cards");

  return (
    <div id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            shouldAnimateHeader ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-center text-base/7 font-semibold text-primary">
            Why Choose Wavium
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-primary sm:text-5xl">
            Dive deep into what makes us different
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              shouldAnimateCards
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: shouldAnimateCards ? 0.1 : 0 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white/70 backdrop-blur-sm lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                    Expert Team
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Seasoned professionals who navigate digital waters with
                  precision
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm flex items-center justify-center">
                <div className="p-16">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-full blur-3xl"></div>
                    <Users className="w-24 h-24 text-primary relative z-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg outline outline-white/20 lg:rounded-l-4xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              shouldAnimateCards
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: shouldAnimateCards ? 0.2 : 0 }}
            className="relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg bg-white/70 backdrop-blur-sm max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                    Proven Results
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Track record of helping businesses reach new depths of success
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-full blur-2xl"></div>
                  <TrendingUp className="w-16 h-16 text-primary relative z-10" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg outline outline-white/20 max-lg:rounded-t-4xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              shouldAnimateCards
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: shouldAnimateCards ? 0.3 : 0 }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-white/70 backdrop-blur-sm" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                    Custom Solutions
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Tailored strategies that fit your unique business currents
                </p>
              </div>
              <div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-full blur-2xl"></div>
                  <Settings className="w-16 h-16 text-primary relative z-10" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg outline outline-white/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              shouldAnimateCards
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: shouldAnimateCards ? 0.4 : 0 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white/70 backdrop-blur-sm max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <div className="flex items-center gap-3">
                  <Headphones className="w-6 h-6 text-primary" />
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                    24/7 Support
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Always available to keep your digital ship sailing smoothly
                </p>
              </div>
              <div className="relative min-h-120 w-full grow flex items-center justify-center">
                <div className="p-16">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-full blur-3xl"></div>
                    <Headphones className="w-24 h-24 text-primary relative z-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg outline outline-white/20 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </motion.div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              shouldAnimateCards
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: shouldAnimateCards ? 0.5 : 0 }}
            className="relative"
          >
            <div className="absolute inset-px rounded-lg bg-white/70 backdrop-blur-sm" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                    Transparent Pricing
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Clear, honest pricing with no hidden depths
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 pb-8 sm:px-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-full blur-2xl"></div>
                  <DollarSign className="w-16 h-16 text-primary relative z-10" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg outline outline-white/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              shouldAnimateCards
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, delay: shouldAnimateCards ? 0.6 : 0 }}
            className="relative"
          >
            <div className="absolute inset-px rounded-lg bg-white/70 backdrop-blur-sm" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                    Creative Excellence
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Award-winning creativity that makes waves in your industry
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 pb-8 sm:px-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-full blur-2xl"></div>
                  <Award className="w-16 h-16 text-primary relative z-10" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg outline outline-white/20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
