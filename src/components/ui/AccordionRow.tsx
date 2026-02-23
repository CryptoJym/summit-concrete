"use client";

import { MaterialIcon } from "./Icons";

interface Spec {
  label: string;
  value: string;
}

interface AccordionRowProps {
  number: string;
  title: string;
  specs: Spec[];
  note?: string;
  diagramLabel: string;
  defaultOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionRow({
  number,
  title,
  specs,
  note,
  diagramLabel,
  defaultOpen = false,
  onToggle,
}: AccordionRowProps) {
  return (
    <details
      className="group border-b-2 border-asphalt bg-white open:bg-surface"
      open={defaultOpen}
      onClick={onToggle}
    >
      <summary className="flex items-center justify-between py-8 px-4 md:px-6 cursor-pointer hover:bg-primary hover:text-asphalt select-none transition-none">
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="font-mono text-sm md:text-base text-rebar group-hover:text-asphalt">
            {number}
          </span>
          <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
            {title}
          </h3>
        </div>
        <div className="size-8 md:size-12 border border-asphalt flex items-center justify-center bg-white group-hover:bg-asphalt group-hover:text-primary transition-none">
          <MaterialIcon
            name="add"
            className="text-2xl group-open:hidden"
          />
          <MaterialIcon
            name="remove"
            className="text-2xl hidden group-open:block"
          />
        </div>
      </summary>
      <div className="p-6 md:p-8 border-t border-asphalt bg-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-sm font-bold uppercase bg-asphalt text-white p-1 inline-block w-fit">
              Specifications
            </h4>
            <div className="border border-asphalt bg-white">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-2 ${
                    i < specs.length - 1 ? "border-b border-cured" : ""
                  } ${i % 2 === 1 ? "bg-surface" : ""}`}
                >
                  <div className="p-3 font-mono text-xs uppercase text-rebar border-r border-cured">
                    {spec.label}
                  </div>
                  <div className="p-3 font-mono text-sm font-bold">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
            {note && (
              <div className="mt-4 p-4 border border-asphalt bg-primary/10 flex items-start gap-3">
                <MaterialIcon
                  name="warning"
                  className="text-primary text-xl"
                />
                <p className="text-xs font-mono uppercase leading-tight">
                  <strong>Note:</strong> {note}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 h-full">
            <h4 className="font-mono text-sm font-bold uppercase bg-asphalt text-white p-1 inline-block w-fit">
              Schematic View
            </h4>
            <div className="flex-1 border border-asphalt bg-asphalt p-4 relative min-h-[200px] flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="text-primary/50 font-mono text-sm uppercase">
                [TECHNICAL DIAGRAM]
              </div>
              <div className="absolute bottom-2 right-2 text-primary font-mono text-[10px]">
                {diagramLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}
