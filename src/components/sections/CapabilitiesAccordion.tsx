"use client";

import { useRef } from "react";
import { capabilities } from "@/lib/content";
import { AccordionRow } from "@/components/ui/AccordionRow";

export function CapabilitiesAccordion() {
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    if (!detailsRef.current) return;
    const allDetails = detailsRef.current.querySelectorAll("details");
    allDetails.forEach((detail, i) => {
      if (i !== index) detail.removeAttribute("open");
    });
  };

  return (
    <div ref={detailsRef} className="w-full max-w-[960px] px-4 md:px-0 flex flex-col border-t-2 border-asphalt">
      {capabilities.map((cap, i) => (
        <AccordionRow
          key={cap.number}
          number={cap.number}
          title={cap.title}
          specs={cap.specs}
          note={cap.note}
          diagramLabel={cap.diagramLabel}
          defaultOpen={i === 0}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
