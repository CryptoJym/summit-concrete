"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { brand, quoteFormFields } from "@/lib/content";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { MaterialIcon } from "@/components/ui/Icons";

const FORM_ID_PLACEHOLDER = "YOUR_FORMSPREE_FORM_ID";

interface QuoteFormProps {
  formspreeFormId?: string;
}

function getFormspreeErrorMessage(payload: unknown) {
  if (
    payload &&
    typeof payload === "object" &&
    "errors" in payload &&
    Array.isArray(payload.errors) &&
    payload.errors.length > 0 &&
    payload.errors[0] &&
    typeof payload.errors[0] === "object" &&
    "message" in payload.errors[0] &&
    typeof payload.errors[0].message === "string"
  ) {
    return payload.errors[0].message;
  }

  return "Could not submit your request. Please call us directly.";
}

export function QuoteForm({ formspreeFormId }: QuoteFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resolvedFormId = formspreeFormId?.trim() || FORM_ID_PLACEHOLDER;
  const hasPlaceholderFormId = resolvedFormId === FORM_ID_PLACEHOLDER;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (hasPlaceholderFormId) {
      setSubmitError("Formspree is not configured yet. Please call us directly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${resolvedFormId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.currentTarget),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(getFormspreeErrorMessage(payload));
      }

      router.push("/quote/success");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not submit your request. Please call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-[55%] bg-surface p-6 md:p-12 flex flex-col justify-center relative">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto w-full relative z-10">
        {hasPlaceholderFormId && (
          <div className="border-2 border-alert bg-alert/10 px-4 py-3 font-mono text-xs md:text-sm leading-relaxed">
            Forms are currently in setup mode. Set `FORMSPREE_FORM_ID` to activate quote submissions.
          </div>
        )}

        <Input id="company" label="Company / Contact Name" required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input id="location" label="Site Location" />
          <Input id="zip" label="Zip Code" />
        </div>
        <Select
          id="type"
          label="Project Classification"
          options={quoteFormFields.projectTypes}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input id="yardage" label="Est. Yardage" type="number" />
          <Input id="deadline" label="Target Timeline" type="date" />
        </div>
        <Textarea
          id="details"
          label="Technical Specifications / Notes"
          placeholder="ENTER ADDITIONAL REINFORCEMENT REQUIREMENTS OR SITE ACCESS RESTRICTIONS..."
        />
        <div className="pt-4">
          {submitError && (
            <p role="alert" className="mb-4 border-2 border-alert bg-alert/10 px-4 py-3 font-mono text-xs md:text-sm leading-relaxed text-asphalt">
              {submitError}{" "}
              <a href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`} className="underline font-bold hover:text-primary transition-colors">
                {brand.phone}
              </a>
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[64px] bg-asphalt hover:bg-asphalt/90 text-primary font-display uppercase text-xl md:text-2xl font-bold tracking-wide flex items-center justify-center gap-3 border-2 border-asphalt shadow-hard active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all"
          >
            <span>{isSubmitting ? "SENDING..." : quoteFormFields.submitLabel}</span>
            <MaterialIcon name="arrow_forward" className="text-3xl" />
          </button>
          <div className="flex justify-between mt-2 px-1">
            <p className="font-mono text-[10px] text-rebar">{quoteFormFields.responseTime}</p>
            <p className="font-mono text-[10px] text-rebar uppercase">{quoteFormFields.disclaimer}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
