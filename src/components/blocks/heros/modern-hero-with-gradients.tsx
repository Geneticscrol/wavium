"use client";
import { cn } from "@/app/lib/utils";
import { ArrowRight, Waves, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";
import { smoothScrollTo } from "@/app/lib/smooth-scroll";

export function ModernHeroWithGradients() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldAnimateHero = useOneTimeAnimation("hero-section");
  const shouldAnimateWaves = useOneTimeAnimation("hero-waves");

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId, {
      offset: 80,
      duration: 1200,
      easing: "ease-in-out",
      onStart: () => {
        console.log(`Starting scroll to: ${sectionId}`);
      },
      onComplete: () => {
        console.log(`Completed scroll to: ${sectionId}`);
      },
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative h-full min-h-[40rem] w-full bg-gradient-to-br from-[#0D7377] via-[#0D7377] to-[#E6FFFA]">
      {/* Wave decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 opacity-10"
          initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
          animate={
            shouldAnimateWaves
              ? {
                  opacity: 0.1,
                  rotate: 360,
                  scale: [0.8, 1.2, 1],
                }
              : {
                  opacity: 0.1,
                  rotate: 0,
                  scale: 1,
                }
          }
          transition={{
            opacity: { duration: 1, delay: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Waves className="w-full h-full text-white" />
        </motion.div>
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 opacity-5"
          initial={{ opacity: 0, rotate: 360, scale: 0.8 }}
          animate={
            shouldAnimateWaves
              ? {
                  opacity: 0.05,
                  rotate: 0,
                  scale: [0.8, 1.3, 1],
                }
              : {
                  opacity: 0.05,
                  rotate: 0,
                  scale: 1,
                }
          }
          transition={{
            opacity: { duration: 1, delay: 0.7 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Waves className="w-full h-full text-white" />
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-4">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          shouldAnimate={shouldAnimateHero}
        />
        <div className="relative my-12 overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 py-10 md:py-40">
          <TopLines />
          <BottomLines />
          <SideLines />
          <TopGradient />
          <BottomGradient />

          <div className="relative z-20 flex flex-col items-center justify-center overflow-hidden rounded-3xl p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                shouldAnimateHero ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.8 }}
            >
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="flex items-center gap-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1 text-center text-sm text-white hover:bg-white/30 transition-colors"
              >
                <span>Dive Into Digital Success</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={
                shouldAnimateHero ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.8, delay: shouldAnimateHero ? 0.2 : 0 }}
              className="font-[var(--font-display)] bg-gradient-to-b from-white to-white/80 bg-clip-text py-4 text-center text-2xl text-transparent md:text-4xl lg:text-7xl font-bold"
            >
              Transform Your <br /> Digital Presence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                shouldAnimateHero ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.8, delay: shouldAnimateHero ? 0.4 : 0 }}
              className="font-[var(--font-body)] mx-auto max-w-2xl py-4 text-center text-base text-white/90 md:text-lg leading-relaxed"
            >
              Wavium helps businesses prosper through expert website creation,
              social media management, content creation, and digital marketing
              services. Dive into success with our comprehensive digital
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                shouldAnimateHero ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.8, delay: shouldAnimateHero ? 0.6 : 0 }}
              className="flex flex-col items-center gap-4 py-4 sm:flex-row"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="font-[var(--font-body)] w-40 gap-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 text-center text-sm text-white hover:bg-white/30 transition-colors"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => scrollToSection("showcase")}
                className="font-[var(--font-body)] w-40 gap-1 rounded-full border border-transparent bg-white px-4 py-2 text-center text-sm text-[#0D7377] hover:bg-white/90 transition-colors"
              >
                View Our Work
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  shouldAnimate,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  shouldAnimate: boolean;
}) => {
  const links = [
    { label: "Home", href: "#", action: () => scrollToSection("home") },
    {
      label: "Services",
      href: "#services",
      action: () => scrollToSection("services"),
    },
    {
      label: "Portfolio",
      href: "#showcase",
      action: () => scrollToSection("showcase"),
    },
    { label: "About", href: "#about", action: () => scrollToSection("about") },
    {
      label: "Contact",
      href: "#contact",
      action: () => scrollToSection("contact"),
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between"
    >
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 lg:flex">
        {links.map((link, idx) => (
          <button
            key={link.href + idx}
            onClick={link.action}
            className="font-[var(--font-body)] text-sm font-medium text-white/90 transition duration-200 hover:text-white"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-white p-2"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Login */}
      <button
        onClick={() => scrollToSection("contact")}
        className="hidden lg:block font-[var(--font-body)] text-sm font-medium text-white/90 transition duration-200 hover:text-white"
      >
        Get Started
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 lg:hidden">
          {links.map((link, idx) => (
            <button
              key={link.href + idx}
              onClick={link.action}
              className="block w-full text-left py-2 text-sm font-medium text-white/90 transition duration-200 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

const TopLines = () => {
  return (
    <svg
      width="166"
      height="298"
      viewBox="0 0 166 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-x-0 top-0 aspect-square h-[100px] w-full md:h-[200px]"
    >
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 1 -108)"
        stroke="url(#paint0_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 34 -108)"
        stroke="url(#paint1_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 67 -108)"
        stroke="url(#paint2_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 100 -108)"
        stroke="url(#paint3_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 133 -108)"
        stroke="url(#paint4_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 166 -108)"
        stroke="url(#paint5_linear_254_143)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const BottomLines = () => {
  return (
    <svg
      width="445"
      height="418"
      viewBox="0 0 445 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-x-0 -bottom-20 z-20 aspect-square h-[150px] w-full md:h-[300px]"
    >
      <line
        x1="139.5"
        y1="418"
        x2="139.5"
        y2="12"
        stroke="url(#paint0_linear_0_1)"
      />
      <line
        x1="172.5"
        y1="418"
        x2="172.5"
        y2="12"
        stroke="url(#paint1_linear_0_1)"
      />
      <line
        x1="205.5"
        y1="418"
        x2="205.5"
        y2="12"
        stroke="url(#paint2_linear_0_1)"
      />
      <line
        x1="238.5"
        y1="418"
        x2="238.5"
        y2="12"
        stroke="url(#paint3_linear_0_1)"
      />
      <line
        x1="271.5"
        y1="418"
        x2="271.5"
        y2="12"
        stroke="url(#paint4_linear_0_1)"
      />
      <line
        x1="304.5"
        y1="418"
        x2="304.5"
        y2="12"
        stroke="url(#paint5_linear_0_1)"
      />
      <path
        d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
        stroke="url(#paint6_linear_0_1)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <path
        d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
        stroke="url(#paint7_linear_0_1)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="140.5"
          y1="418"
          x2="140.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="173.5"
          y1="418"
          x2="173.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="206.5"
          y1="418"
          x2="206.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="239.5"
          y1="418"
          x2="239.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="272.5"
          y1="418"
          x2="272.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="305.5"
          y1="418"
          x2="305.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_0_1"
          x1="115"
          y1="390.591"
          x2="-59.1703"
          y2="205.673"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_0_1"
          x1="330"
          y1="390.591"
          x2="504.17"
          y2="205.673"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SideLines = () => {
  return (
    <svg
      width="1382"
      height="370"
      viewBox="0 0 1382 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 z-30 h-full w-full"
    >
      <path
        d="M268 115L181.106 6.97176C178.069 3.19599 173.485 1 168.639 1H0"
        stroke="url(#paint0_linear_337_46)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <path
        d="M1114 115L1200.89 6.97176C1203.93 3.19599 1208.52 1 1213.36 1H1382"
        stroke="url(#paint1_linear_337_46)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <path
        d="M268 255L181.106 363.028C178.069 366.804 173.485 369 168.639 369H0"
        stroke="url(#paint2_linear_337_46)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <path
        d="M1114 255L1200.89 363.028C1203.93 366.804 1208.52 369 1213.36 369H1382"
        stroke="url(#paint3_linear_337_46)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_337_46"
          x1="26.4087"
          y1="1.00001"
          x2="211.327"
          y2="175.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_337_46"
          x1="1355.59"
          y1="1.00001"
          x2="1170.67"
          y2="175.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_337_46"
          x1="26.4087"
          y1="369"
          x2="211.327"
          y2="194.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_337_46"
          x1="1355.59"
          y1="369"
          x2="1170.67"
          y2="194.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
        <Waves className="w-5 h-5 text-white" />
      </div>
      <span className="font-[var(--font-display)] text-lg font-bold text-white">
        Wavium
      </span>
    </div>
  );
};

const BottomGradient = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="551"
      height="295"
      viewBox="0 0 551 295"
      fill="none"
      className={cn(
        "pointer-events-none absolute -right-80 bottom-0 h-full w-full opacity-30",
        className,
      )}
    >
      <path
        d="M118.499 0H532.468L635.375 38.6161L665 194.625L562.093 346H0L24.9473 121.254L118.499 0Z"
        fill="url(#paint0_radial_254_132)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_254_132"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(412.5 346) rotate(-91.153) scale(397.581 423.744)"
        >
          <stop stopColor="#0D7377" />
          <stop offset="0.25" stopColor="#0D7377" />
          <stop offset="0.573634" stopColor="#E6FFFA" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const TopGradient = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="807"
      height="797"
      viewBox="0 0 807 797"
      fill="none"
      className={cn(
        "pointer-events-none absolute -left-96 top-0 h-full w-full opacity-30",
        className,
      )}
    >
      <path
        d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
        fill="url(#paint0_radial_254_135)"
      />
      <path
        d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
        fill="url(#paint1_radial_254_135)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_254_135"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)"
        >
          <stop stopColor="#0D7377" />
          <stop offset="0.25" stopColor="#0D7377" />
          <stop offset="0.573634" stopColor="#E6FFFA" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_254_135"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)"
        >
          <stop stopColor="#0D7377" />
          <stop offset="0.283363" stopColor="#0D7377" />
          <stop offset="0.573634" stopColor="#E6FFFA" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
