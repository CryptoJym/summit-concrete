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

// SVG technical diagrams per capability
function FoundationDiagram() {
  return (
    <svg className="w-full h-auto max-w-[280px]" fill="none" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 140H190" stroke="white" strokeWidth="2" />
      <path d="M20 140V80H180V140" stroke="white" strokeWidth="2" />
      <path d="M20 80L50 40H150L180 80" stroke="white" strokeDasharray="4 4" strokeWidth="2" />
      <rect height="40" stroke="#F2FF00" strokeWidth="1" width="120" x="40" y="90" />
      <line stroke="#F2FF00" strokeWidth="1" x1="40" x2="160" y1="100" y2="100" />
      <line stroke="#F2FF00" strokeWidth="1" x1="40" x2="160" y1="110" y2="110" />
      <line stroke="#F2FF00" strokeWidth="1" x1="40" x2="160" y1="120" y2="120" />
      <circle cx="100" cy="70" r="15" stroke="white" strokeWidth="1" />
      <path d="M100 55V85" stroke="white" strokeWidth="1" />
      <path d="M85 70H115" stroke="white" strokeWidth="1" />
    </svg>
  );
}

function CableLayoutDiagram() {
  return (
    <svg className="w-full h-auto max-w-[280px]" fill="none" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect height="10" stroke="white" strokeWidth="1" width="160" x="20" y="40" />
      <rect height="10" stroke="white" strokeWidth="1" width="160" x="20" y="100" />
      <path d="M30 50 C30 100, 170 50, 170 100" fill="none" stroke="#F2FF00" strokeWidth="2" />
      <circle cx="30" cy="50" fill="white" r="4" />
      <circle cx="170" cy="100" fill="white" r="4" />
    </svg>
  );
}

function CranePickDiagram() {
  return (
    <svg className="w-full h-auto max-w-[280px]" fill="none" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect height="80" stroke="white" strokeWidth="2" width="40" x="80" y="40" />
      <line stroke="#F2FF00" strokeDasharray="4 4" strokeWidth="2" x1="100" x2="100" y1="40" y2="20" />
      <path d="M100 20 L80 10 L120 10 L100 20" fill="#F2FF00" />
      <line stroke="white" strokeWidth="2" x1="60" x2="140" y1="120" y2="120" />
    </svg>
  );
}

function DowelBarDiagram() {
  return (
    <svg className="w-full h-auto max-w-[280px]" fill="none" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect height="40" stroke="white" strokeWidth="2" width="75" x="20" y="60" />
      <rect height="40" stroke="white" strokeWidth="2" width="75" x="105" y="60" />
      <line stroke="#F2FF00" strokeWidth="3" x1="80" x2="120" y1="80" y2="80" />
      <line stroke="#F2FF00" strokeWidth="1" x1="95" x2="105" y1="60" y2="60" />
    </svg>
  );
}

const diagramMap: Record<string, React.FC> = {
  "01": FoundationDiagram,
  "02": CableLayoutDiagram,
  "03": CranePickDiagram,
  "04": DowelBarDiagram,
};

const headerMap: Record<string, string> = {
  "01": "Schematic View",
  "02": "Cable Layout",
  "03": "Lift Diagram",
  "04": "Joint Detail",
};

export function AccordionRow({
  number,
  title,
  specs,
  note,
  diagramLabel,
  defaultOpen = false,
  onToggle,
}: AccordionRowProps) {
  const DiagramComponent = diagramMap[number];
  const diagramHeader = headerMap[number] || "Schematic View";

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
              {diagramHeader}
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
              {DiagramComponent ? (
                <DiagramComponent />
              ) : (
                <div className="text-primary/50 font-mono text-sm uppercase">
                  [TECHNICAL DIAGRAM]
                </div>
              )}
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
