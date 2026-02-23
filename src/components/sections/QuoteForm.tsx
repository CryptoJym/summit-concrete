"use client";

import { useRouter } from "next/navigation";
import { quoteFormFields } from "@/lib/content";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { MaterialIcon } from "@/components/ui/Icons";

export function QuoteForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/quote/success");
  };

  return (
    <div className="w-full lg:w-[55%] bg-surface p-6 md:p-12 flex flex-col justify-center relative">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto w-full relative z-10">
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
          <button
            type="submit"
            className="w-full h-[64px] bg-asphalt hover:bg-asphalt/90 text-primary font-display uppercase text-xl md:text-2xl font-bold tracking-wide flex items-center justify-center gap-3 border-2 border-asphalt shadow-hard active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all"
          >
            <span>{quoteFormFields.submitLabel}</span>
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
