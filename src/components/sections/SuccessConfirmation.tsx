import { successPage } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/Icons";

export function SuccessConfirmation() {
  return (
    <div className="flex flex-col justify-center space-y-8">
      <div className="size-24 rounded-xl border-2 border-primary bg-primary/10 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(242,255,0,0.3)]">
        <MaterialIcon name="check" className="text-primary text-[48px] font-bold" />
      </div>
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider">
          {successPage.badge}
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase">
          {successPage.heading[0]}<br />{successPage.heading[1]}
        </h2>
        <p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
          {successPage.description}
        </p>
      </div>
      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button href="/projects" variant="primary" size="md">
          {successPage.primaryCta}
          <MaterialIcon name="arrow_forward" className="text-[18px]" />
        </Button>
        <button className="h-12 px-8 bg-transparent border border-slate-700 text-slate-300 font-medium text-sm tracking-wide rounded hover:border-primary hover:text-primary transition-colors">
          {successPage.secondaryCta}
        </button>
      </div>
    </div>
  );
}
