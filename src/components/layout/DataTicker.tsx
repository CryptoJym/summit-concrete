import { tickerMetrics } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

export function DataTicker() {
  const items = tickerMetrics.map((metric) => (
    <span
      key={metric}
      className="text-asphalt font-mono font-bold text-lg flex items-center gap-3"
    >
      <span className="inline-block w-2 h-2 bg-asphalt" />
      {metric}
    </span>
  ));

  return (
    <div className="sticky bottom-0 z-50 w-full bg-primary border-t-2 border-asphalt h-[60px] flex items-center overflow-hidden whitespace-nowrap">
      <div className="bg-asphalt text-primary h-full px-6 flex items-center justify-center border-r-2 border-asphalt z-10 hidden md:flex">
        <MaterialIcon
          name="settings"
          className="animate-spin text-xl mr-2"
        />
        <span className="font-mono font-bold text-sm">SYS.METRICS</span>
      </div>
      <div className="flex animate-marquee items-center">
        <div className="flex items-center gap-12 px-4">{items}</div>
        <div className="flex items-center gap-12 px-4">{items}</div>
      </div>
    </div>
  );
}
