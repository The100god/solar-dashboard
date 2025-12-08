// components/dashboard/LiveSolarCard.tsx
import { LiveStatus } from "@/lib/solarData";

interface LiveSolarCardProps {
  live: LiveStatus;
  selfConsumptionPercent: number;
}

const LiveSolarCard: React.FC<LiveSolarCardProps> = ({
  live,
  selfConsumptionPercent,
}) => {
  return (
    <div className="rounded-3xl bg-linear-to-br from-sky-800 via-sky-900 to-slate-900 p-5 sm:p-6 shadow-lg shadow-sky-900/40 relative overflow-hidden">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      <p className="text-xs uppercase tracking-widest text-sky-200">
        Solar Production
      </p>
      <div className="mt-3 flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="relative flex items-center justify-center">
          <div className="h-34 w-34 sm:h-36 sm:w-36 rounded-full bg-slate-900/70 border-4 border-emerald-400/70 flex flex-col items-center justify-center shadow-lg shadow-emerald-700/40 p-4 overflow-hidden">
            <span className="text-xs text-wrap text-center uppercase tracking-wide text-slate-300">
              Solar Power Now
            </span>
            <span className="mt-1 text-3xl sm:text-4xl font-semibold">
              {live.solarPowerNowKw.toFixed(2)}
            </span>
            <span className="text-xs text-slate-300">kW</span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="rounded-2xl bg-slate-900/70 border border-sky-700/60 p-3">
            <p className="text-slate-300">Production Today</p>
            <p className="mt-1 text-lg font-semibold">
              {live.productionTodayKwh.toFixed(1)} kWh
            </p>
            <p className="mt-1 text-[0.7rem] text-slate-400">
              Est. 10.5 kWh • 93% of expected
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 border border-sky-700/60 p-3">
            <p className="text-slate-300">Home Consumption Now</p>
            <p className="mt-1 text-lg font-semibold">
              {live.homeConsumptionKw.toFixed(2)} kW
            </p>
            <p className="mt-1 text-[0.7rem] text-slate-400">
              {Math.round(selfConsumptionPercent)}% covered by solar
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 border border-sky-700/60 p-3">
            <p className="text-slate-300">This Month</p>
            <p className="mt-1 text-lg font-semibold">482 kWh</p>
            <p className="mt-1 text-[0.7rem] text-slate-400">
              +8% vs last month
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 border border-sky-700/60 p-3">
            <p className="text-slate-300">Lifetime</p>
            <p className="mt-1 text-lg font-semibold">32.9 MWh</p>
            <p className="mt-1 text-[0.7rem] text-slate-400">Since Mar 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSolarCard;

