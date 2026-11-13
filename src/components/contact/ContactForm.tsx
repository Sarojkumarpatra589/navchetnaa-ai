"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Loader2 } from "lucide-react";
import {
  contactFormSchema,
  ContactFormValues,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/validation/contactSchema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const router = useRouter();
  const formStartRef = useRef<number>(Date.now());
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phone: "",
      company: "",
      country: "",
      service: SERVICE_OPTIONS[0],
      budget: BUDGET_OPTIONS[2],
      timeline: TIMELINE_OPTIONS[1],
      description: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          formStartedAt: formStartRef.current,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message || "Unable to submit your inquiry. Please check your details."
        );
        return;
      }

      // Navigate to confirmation page strictly after confirmed server response
      router.push("/thank-you");
    } catch {
      setServerError(
        "Network error while submitting your inquiry. Please check your connection or message us on WhatsApp."
      );
    }
  };

  return (
    <div className={styles.formCard}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.form}
        aria-label="Start Your Project Inquiry Form"
      >
        {/* Honeypot field for automated bot filtering */}
        <div className={styles.honeypotField} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {/* Row 1: Full Name & Business Email */}
        <div className={styles.rowTwo}>
          <div className={styles.fieldGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name<span className={styles.requiredMark}>*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g., Ananya Sharma"
              aria-invalid={Boolean(errors.fullName)}
              className={cn(styles.input, errors.fullName && styles.inputError)}
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className={styles.errorText} role="alert">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="businessEmail" className={styles.label}>
              Business Email<span className={styles.requiredMark}>*</span>
            </label>
            <input
              id="businessEmail"
              type="email"
              placeholder="name@company.com"
              aria-invalid={Boolean(errors.businessEmail)}
              className={cn(
                styles.input,
                errors.businessEmail && styles.inputError
              )}
              {...register("businessEmail")}
            />
            {errors.businessEmail && (
              <span className={styles.errorText} role="alert">
                {errors.businessEmail.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Phone/WhatsApp & Company */}
        <div className={styles.rowTwo}>
          <div className={styles.fieldGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone / WhatsApp<span className={styles.requiredMark}>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              aria-invalid={Boolean(errors.phone)}
              className={cn(styles.input, errors.phone && styles.inputError)}
              {...register("phone")}
            />
            {errors.phone && (
              <span className={styles.errorText} role="alert">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="company" className={styles.label}>
              Company / Organization<span className={styles.requiredMark}>*</span>
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your company or institution name"
              aria-invalid={Boolean(errors.company)}
              className={cn(styles.input, errors.company && styles.inputError)}
              {...register("company")}
            />
            {errors.company && (
              <span className={styles.errorText} role="alert">
                {errors.company.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Country & Required Service */}
        <div className={styles.rowTwo}>
          <div className={styles.fieldGroup}>
            <label htmlFor="country" className={styles.label}>
              Country<span className={styles.requiredMark}>*</span>
            </label>
            <input
              id="country"
              type="text"
              placeholder="e.g., India, United States, UAE, UK"
              aria-invalid={Boolean(errors.country)}
              className={cn(styles.input, errors.country && styles.inputError)}
              {...register("country")}
            />
            {errors.country && (
              <span className={styles.errorText} role="alert">
                {errors.country.message}
              </span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="service" className={styles.label}>
              Required Service / Product<span className={styles.requiredMark}>*</span>
            </label>
            <select
              id="service"
              aria-invalid={Boolean(errors.service)}
              className={cn(styles.select, errors.service && styles.inputError)}
              {...register("service")}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className={styles.errorText} role="alert">
                {errors.service.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 4: Estimated Budget & Project Timeline */}
        <div className={styles.rowTwo}>
          <div className={styles.fieldGroup}>
            <label htmlFor="budget" className={styles.label}>
              Estimated Budget<span className={styles.requiredMark}>*</span>
            </label>
            <select
              id="budget"
              aria-invalid={Boolean(errors.budget)}
              className={cn(styles.select, errors.budget && styles.inputError)}
              {...register("budget")}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.budget && (
              <span className={styles.errorText} role="alert">
                {errors.budget.message}
              </span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="timeline" className={styles.label}>
              Project Timeline<span className={styles.requiredMark}>*</span>
            </label>
            <select
              id="timeline"
              aria-invalid={Boolean(errors.timeline)}
              className={cn(
                styles.select,
                errors.timeline && styles.inputError
              )}
              {...register("timeline")}
            >
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <span className={styles.errorText} role="alert">
                {errors.timeline.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 5: Project Description */}
        <div className={styles.fieldGroup}>
          <label htmlFor="description" className={styles.label}>
            Project Description &amp; Objectives
            <span className={styles.requiredMark}>*</span>
          </label>
          <textarea
            id="description"
            placeholder="Describe your operational goals, key workflows, integrations needed, or product requirements..."
            aria-invalid={Boolean(errors.description)}
            className={cn(
              styles.textarea,
              errors.description && styles.inputError
            )}
            {...register("description")}
          />
          {errors.description && (
            <span className={styles.errorText} role="alert">
              {errors.description.message}
            </span>
          )}
        </div>

        {serverError && (
          <div className={styles.serverAlert} role="alert">
            {serverError}
          </div>
        )}

        <div className={styles.submitRow}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Validating &amp; Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Inquiry</span>
                <ArrowUpRight size={18} />
              </>
            )}
          </Button>

          <p className={styles.privacyNote}>
            Your project details are handled strictly in confidence and used
            solely to evaluate technical scope and respond to your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}