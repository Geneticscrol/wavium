"use client";
import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useId } from "react";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";
import { useOneTimeAnimation } from "@/app/hooks/use-one-time-animation";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

export function ContactFormGridWithDetails() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const shouldAnimateLeft = useOneTimeAnimation("contact-left");
  const shouldAnimateRight = useOneTimeAnimation("contact-right");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, you'd send this to your API
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
    setSubmitError(null);
  };

  return (
    <div
      id="contact"
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={
          shouldAnimateLeft ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
        }
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center overflow-hidden lg:items-start"
      >
        <div className="flex items-start justify-start">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <Mail className="h-6 w-6 text-primary" />
          </FeatureIconContainer>
        </div>

        <h2 className="mt-9 bg-gradient-to-b from-primary to-primary/80 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl font-[var(--font-display)]">
          Ready to Make Waves?
        </h2>

        <p className="mt-8 max-w-lg text-center text-base text-foreground md:text-left font-[var(--font-body)]">
          Let's discuss how we can help your business prosper in the digital
          ocean.
        </p>

        <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
          <p className="text-sm text-muted-foreground font-[var(--font-body)]">
            hello@wavium.agency
          </p>
          <div className="h-1 w-1 rounded-full bg-muted-foreground" />
          <p className="text-sm text-muted-foreground font-[var(--font-body)]">
            (555) 123-WAVE
          </p>
          <div className="h-1 w-1 rounded-full bg-muted-foreground" />
          <p className="text-sm text-muted-foreground font-[var(--font-body)]">
            123 Ocean Drive, Suite 456
          </p>
        </div>

        <div className="mt-4 hidden flex-col items-center gap-4 md:flex-row lg:flex">
          <p className="text-sm text-muted-foreground font-[var(--font-body)]">
            Miami, FL 33139
          </p>
          <div className="h-1 w-1 rounded-full bg-muted-foreground" />
          <p className="text-sm text-muted-foreground font-[var(--font-body)]">
            Monday - Friday: 9AM - 6PM EST
          </p>
        </div>

        <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
          <Pin className="top-0 right-1" />
          <div className="w-96 h-64 bg-gradient-to-br from-primary/20 to-accent/40 rounded-xl opacity-60 [transform:rotateX(45deg)_translateZ(0px)] flex items-center justify-center">
            <div className="text-primary/60 font-semibold text-lg">
              World Map
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={
          shouldAnimateRight ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
        }
        transition={{ duration: 0.8, delay: shouldAnimateRight ? 0.2 : 0 }}
        className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-card/80 backdrop-blur-lg border border-border p-4 sm:p-10 shadow-lg"
      >
        <Grid size={20} />

        {isSubmitted ? (
          <div className="relative z-20 w-full text-center py-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">
              Thank you for your message!
            </h3>
            <p className="text-muted-foreground mb-6">
              We've received your inquiry and will get back to you within 24
              hours.
            </p>
            <button
              onClick={handleReset}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-20 w-full">
            <div className="mb-4">
              <label
                className="mb-2 inline-block text-sm font-medium text-foreground font-[var(--font-body)]"
                htmlFor="name"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Captain of your digital ship"
                value={formData.name}
                onChange={handleInputChange}
                className={cn(
                  "shadow-input h-10 w-full rounded-md border bg-accent/20 backdrop-blur-sm pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary font-[var(--font-body)]",
                  errors.name ? "border-red-500" : "border-border",
                )}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="mb-2 inline-block text-sm font-medium text-foreground font-[var(--font-body)]"
                htmlFor="email"
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@oceanmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className={cn(
                  "shadow-input h-10 w-full rounded-md border bg-accent/20 backdrop-blur-sm pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary font-[var(--font-body)]",
                  errors.email ? "border-red-500" : "border-border",
                )}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="mb-2 inline-block text-sm font-medium text-foreground font-[var(--font-body)]"
                htmlFor="company"
              >
                Company *
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your Digital Enterprise"
                value={formData.company}
                onChange={handleInputChange}
                className={cn(
                  "shadow-input h-10 w-full rounded-md border bg-accent/20 backdrop-blur-sm pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary font-[var(--font-body)]",
                  errors.company ? "border-red-500" : "border-border",
                )}
              />
              {errors.company && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.company}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="mb-2 inline-block text-sm font-medium text-foreground font-[var(--font-body)]"
                htmlFor="service"
              >
                Service Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={cn(
                  "shadow-input h-10 w-full rounded-md border bg-accent/20 backdrop-blur-sm pl-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary font-[var(--font-body)]",
                  errors.service ? "border-red-500" : "border-border",
                )}
              >
                <option value="">Select a service...</option>
                <option value="website-creation">Website Creation</option>
                <option value="social-media">Social Media Management</option>
                <option value="content-creation">Content Creation</option>
                <option value="ad-generation">Ad Generation</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="brand-strategy">Brand Strategy</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.service}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="mb-2 inline-block text-sm font-medium text-foreground font-[var(--font-body)]"
                htmlFor="message"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your digital voyage..."
                value={formData.message}
                onChange={handleInputChange}
                className={cn(
                  "shadow-input w-full rounded-md border bg-accent/20 backdrop-blur-sm pt-4 pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary font-[var(--font-body)]",
                  errors.message ? "border-red-500" : "border-border",
                )}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {submitError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {submitError}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative z-10 flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-[var(--font-body)] w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                  Setting Sail...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Set Sail
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className,
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-card px-2 py-1 text-xs font-normal text-foreground border border-border font-[var(--font-body)]">
          Wavium HQ
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-primary/[0.08] shadow-[0_0_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-primary blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-primary" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-primary blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-primary/70" />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-accent to-accent/50 p-[4px]",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-card",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-primary/20 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/10 opacity-30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-primary/20 stroke-primary/20 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
