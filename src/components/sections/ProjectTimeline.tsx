import { successPage } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

export function ProjectTimeline() {
  return (
    <div className="bg-[#1a1914] border border-slate-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <MaterialIcon name="timeline" className="text-primary" />
        PROJECT TIMELINE
      </h3>
      <div className="relative space-y-0">
        <div className="absolute left-[19px] top-4 bottom-8 w-[2px] bg-slate-800 z-0" />
        {successPage.timeline.map((step, i) => (
          <div
            key={step.step}
            className={`relative z-10 flex gap-6 ${i < successPage.timeline.length - 1 ? "pb-12" : ""} ${
              step.status === "pending" ? "opacity-60 hover:opacity-100 transition-opacity" : ""
            }`}
          >
            <div className="flex-none">
              {step.status === "active" ? (
                <>
                  <div className="size-10 rounded-full bg-primary border-4 border-dark-bg flex items-center justify-center shadow-lg shadow-primary/20">
                    <MaterialIcon name={step.icon || "search"} className="text-asphalt text-lg font-bold" />
                  </div>
                  {i < successPage.timeline.length - 1 && (
                    <div className="absolute left-[19px] top-10 h-full w-[2px] bg-gradient-to-b from-primary to-slate-800" />
                  )}
                </>
              ) : (
                <div className="size-10 rounded-full bg-[#1a1914] border-2 border-slate-600 flex items-center justify-center">
                  <span className="text-slate-400 font-mono text-sm">0{step.step}</span>
                </div>
              )}
            </div>
            <div className="flex-grow pt-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`font-bold text-lg tracking-tight ${step.status === "active" ? "text-white" : "text-slate-200"}`}>
                  {step.title}
                </h4>
                <span
                  className={`text-xs font-mono border px-2 py-0.5 rounded ${
                    step.status === "active"
                      ? "text-primary border-primary/30 bg-primary/5"
                      : "text-slate-500 border-slate-700"
                  }`}
                >
                  {step.status === "active" ? "IN PROGRESS" : "PENDING"}
                </span>
              </div>
              {step.duration && (
                <p className="text-slate-400 text-sm font-mono mb-2">{step.duration}</p>
              )}
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-slate-800 flex items-center gap-4 text-xs text-slate-500 font-mono">
        <MaterialIcon name="info" className="text-sm" />
        <span>Ref ID: <span className="text-slate-300">{successPage.refId}</span></span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Priority: <span className="text-primary">{successPage.priority}</span></span>
      </div>
    </div>
  );
}
