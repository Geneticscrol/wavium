"use client";
import React from "react";
import { cn } from "@/app/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { motion } from "motion/react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";

export function TestimonialsGridWithCenteredCarousel() {
  const shouldAnimateHeader = useOneTimeAnimation("testimonials-header");
  const shouldAnimateGrid = useOneTimeAnimation("testimonials-grid");

  return (
    <div
      id="showcase"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          shouldAnimateHeader ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.8 }}
        className="pb-20"
      >
        <h1 className="pt-4 font-bold text-primary text-lg md:text-2xl font-[var(--font-display)]">
          Client Success Stories
        </h1>
        <p className="text-base text-foreground font-[var(--font-body)]">
          See how we've helped businesses ride the waves of digital success.
        </p>
      </motion.div>

      <div className=" relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-accent/20 opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid shouldAnimate={shouldAnimateGrid} />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = ({
  shouldAnimate,
}: {
  shouldAnimate: boolean;
}) => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
      {grid.map((testimonialsCol, index) => (
        <motion.div
          key={`testimonials-col-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: shouldAnimate ? index * 0.1 : 0 }}
          className="grid gap-4"
        >
          {testimonialsCol.map((testimonial, idx) => (
            <Card key={`testimonial-${testimonial.name}-${index}-${idx}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <QuoteDescription>{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-border bg-card shadow-[2px_4px_16px_0px_rgba(13,115,119,0.06)_inset] group hover:shadow-lg transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold text-primary py-2 font-[var(--font-body)]",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal text-muted-foreground max-w-sm font-[var(--font-body)]",
        className,
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    quote:
      "Wavium transformed our online presence. Our website now converts like a dream and their social media management has tripled our engagement.",
    designation: "CEO of TechFlow",
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "The content creation team at Wavium doesn't just write - they craft stories that resonate. Our brand voice has never been clearer.",
    designation: "Founder of GreenVibe",
  },
  {
    name: "Lisa Thompson",
    quote:
      "Their ad generation services doubled our ROI in just 3 months. Wavium knows how to catch the right audience.",
    designation: "Marketing Director at UrbanStyle",
  },
  {
    name: "David Park",
    quote:
      "From website to social media, Wavium handled everything. Now we're swimming in new customers.",
    designation: "Owner of FreshEats",
  },
  {
    name: "Jennifer Wu",
    quote:
      "Professional, creative, and results-driven. Wavium turned our digital marketing into a competitive advantage.",
    designation: "CEO of CloudTech",
  },
  {
    name: "Alex Johnson",
    quote:
      "Their strategic approach to digital marketing created waves in our industry. We're now the go-to brand in our space.",
    designation: "Founder of FitLife",
  },
  {
    name: "Robert Miller",
    quote:
      "Absolutely revolutionary, a game-changer for our industry. Wavium streamlined our processes and enhanced our productivity dramatically.",
    designation: "Industry Analyst",
  },
  {
    name: "Catherine Lee",
    quote:
      "I can't imagine going back to how things were before Wavium. They've not only improved our work efficiency but transformed our business.",
    designation: "Product Manager",
  },
  {
    name: "David Wright",
    quote:
      "It's like having a superpower! Wavium gave us the ability to do things we never thought were possible in our field.",
    designation: "Research Scientist",
  },
  {
    name: "Eva Green",
    quote:
      "The efficiency they bring is unmatched. Wavium helped us cut costs and improve our end product significantly.",
    designation: "Operations Director",
  },
  {
    name: "Frank Moore",
    quote:
      "A robust solution that fits perfectly into our workflow. Wavium enhanced our team's capabilities and allowed us to tackle complex projects.",
    designation: "Project Manager",
  },
  {
    name: "Grace Hall",
    quote:
      "Incredibly intuitive and easy to work with. Even without technical expertise, Wavium helped us leverage powerful digital solutions.",
    designation: "Marketing Specialist",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const shouldAnimateSlider = useOneTimeAnimation("testimonials-slider");

  const slicedTestimonials = testimonials.slice(0, 6);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1,
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={
        shouldAnimateSlider ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.8 }}
      className="absolute inset-0 mt-20 md:mt-60"
    >
      <div className="max-w-3xl mx-auto  relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-background after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <div className="relative top-11 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {item.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="text-base text-primary md:text-xl font-bold font-[var(--font-body)]">
                      "{item.quote}"
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border border-transparent text-primary/70 transition duration-150 ease-in-out bg-accent/30 relative before:absolute before:inset-0 before:bg-accent/20 before:rounded-full before:pointer-events-none font-[var(--font-body)] hover:bg-accent/50 ${
                      active === index
                        ? "border-primary/50 bg-primary/10"
                        : "border-transparent opacity-70"
                    }`,
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-primary font-bold">{item.name}</span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
