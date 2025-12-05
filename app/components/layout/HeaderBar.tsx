
import Image from "next/image";
import { LiveStatus, weatherLabel } from "@/lib/solarData";

interface HeaderBarProps {
  live: LiveStatus;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ live }) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-900 border border-sky-500/60 flex items-center justify-center overflow-hidden">
          {/* logo image or emoji */}
          {/* If you have /public/logo.svg, use that instead */}
          <Image
            src="/logo.png"
            alt="SolarDash logo"
            width={28}
            height={28}
            className="object-contain rounded-full"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            Power Flow Dashboard
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            Smith Residence • Updated 1 min ago (static demo data)
          </p>
        </div>
      </div>

      <div className="flex-col items-center gap-3 text-xs md:text-sm md:flex text-slate-300">
        <span className="inline-flex justify-between items-center text-xs md:text-sm gap-1 px-1 py-2 sm:px-2 sm:py-2 rounded-full bg-sky-800/60 border border-sky-500/50">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live-style
        </span>
        <span className="mt-1 flex items-center gap-1 text-center">
          {live.temperatureC.toFixed(0)}°C • {weatherLabel[live.weatherIcon]}
        </span>
      </div>
    </header>
  );
};

export default HeaderBar;
