"use client";

import Link from "next/link";
import React from "react";
import { Waves, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";
import { smoothScrollTo } from "@/app/lib/smooth-scroll";

export function SimpleFooterWithFourGrids() {
  const shouldAnimateFooter = useOneTimeAnimation("footer-section");

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
  };

  const services = [
    {
      title: "Website Creation",
      action: () => scrollToSection("services"),
    },
    {
      title: "Social Media Management",
      action: () => scrollToSection("services"),
    },
    {
      title: "Content Creation",
      action: () => scrollToSection("services"),
    },
    {
      title: "Ad Generation",
      action: () => scrollToSection("services"),
    },
    {
      title: "Digital Marketing",
      action: () => scrollToSection("services"),
    },
  ];

  const company = [
    {
      title: "About Us",
      action: () => scrollToSection("about"),
    },
    {
      title: "Our Team",
      action: () => scrollToSection("about"),
    },
    {
      title: "Careers",
      action: () => scrollToSection("contact"),
    },
    {
      title: "Blog",
      action: () => window.open("#", "_blank"),
    },
    {
      title: "Case Studies",
      action: () => scrollToSection("showcase"),
    },
  ];

  const resources = [
    {
      title: "Free Consultation",
      action: () => scrollToSection("contact"),
    },
    {
      title: "Digital Audit",
      action: () => scrollToSection("contact"),
    },
    {
      title: "Industry Insights",
      action: () => window.open("#", "_blank"),
    },
    {
      title: "Client Portal",
      action: () => window.open("#", "_blank"),
    },
    {
      title: "Support",
      action: () => scrollToSection("contact"),
    },
  ];

  const contact = [
    {
      title: "hello@wavium.agency",
      action: () => window.open("mailto:hello@wavium.agency", "_blank"),
    },
    {
      title: "(555) 123-WAVE",
      action: () => window.open("tel:5551239283", "_blank"),
    },
    {
      title: "123 Ocean Drive",
      action: () =>
        window.open(
          "https://maps.google.com/?q=123+Ocean+Drive,+Miami,+FL",
          "_blank",
        ),
    },
    {
      title: "Miami, FL",
      action: () =>
        window.open(
          "https://maps.google.com/?q=123+Ocean+Drive,+Miami,+FL",
          "_blank",
        ),
    },
  ];

  const socials = [
    {
      title: "LinkedIn",
      action: () =>
        window.open("https://linkedin.com/company/wavium", "_blank"),
      icon: Linkedin,
    },
    {
      title: "Twitter",
      action: () => window.open("https://twitter.com/wavium", "_blank"),
      icon: Twitter,
    },
    {
      title: "Instagram",
      action: () => window.open("https://instagram.com/wavium", "_blank"),
      icon: Instagram,
    },
    {
      title: "Facebook",
      action: () => window.open("https://facebook.com/wavium", "_blank"),
      icon: Facebook,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={
        shouldAnimateFooter ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.8 }}
      className="border-t border-accent px-8 py-20 bg-secondary w-full relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-sm text-muted-foreground flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo scrollToSection={scrollToSection} />
          </div>
          <div className="mt-2 ml-2 text-muted-foreground">
            © 2024 Wavium Agency. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-primary text-foreground font-bold">
              Services
            </p>
            <ul className="transition-colors hover:text-primary text-muted-foreground list-none space-y-4">
              {services.map((service, idx) => (
                <li key={"services" + idx} className="list-none">
                  <button
                    onClick={service.action}
                    className="transition-colors hover:text-primary text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-primary text-foreground font-bold">
              Company
            </p>
            <ul className="transition-colors hover:text-primary text-muted-foreground list-none space-y-4">
              {company.map((item, idx) => (
                <li key={"company" + idx} className="list-none">
                  <button
                    onClick={item.action}
                    className="transition-colors hover:text-primary text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-primary text-foreground font-bold">
              Resources
            </p>
            <ul className="transition-colors hover:text-primary text-muted-foreground list-none space-y-4">
              {resources.map((resource, idx) => (
                <li key={"resources" + idx} className="list-none">
                  <button
                    onClick={resource.action}
                    className="transition-colors hover:text-primary text-left"
                  >
                    {resource.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-primary text-foreground font-bold">
              Contact
            </p>
            <ul className="transition-colors hover:text-primary text-muted-foreground list-none space-y-4">
              {contact.map((item, idx) => (
                <li key={"contact" + idx} className="list-none">
                  <button
                    onClick={item.action}
                    className="transition-colors hover:text-primary text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <button
                key={"social" + idx}
                onClick={social.action}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.title}
              >
                <Icon className="h-6 w-6" />
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-accent to-primary/20 inset-x-0">
        Wavium
      </p>
    </motion.div>
  );
}

const Logo = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <button
      onClick={() => scrollToSection("home")}
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-primary px-2 py-1 relative z-20"
    >
      <div className="bg-primary rounded-full p-1">
        <Waves className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-primary">Wavium</span>
        <span className="text-xs text-muted-foreground">
          Navigating Digital Success
        </span>
      </div>
    </button>
  );
};
