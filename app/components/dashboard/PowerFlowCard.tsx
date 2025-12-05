// components/dashboard/PowerFlowCard.tsx
import { LiveStatus } from "@/lib/solarData";

interface FlowBoxProps {
  title: string;
  value: number;
  subtitle: string;
}

const FlowBox: React.FC<FlowBoxProps> = ({ title, value, subtitle }) => (
  <div className="rounded-2xl bg-slate-950/60 border border-slate-700 p-3 flex flex-col gap-1">
    <p className="text-xs text-slate-300">{title}</p>
    <p className="text-lg font-semibold">{value.toFixed(2)} kW</p>
    <p className="text-[0.7rem] text-slate-500">{subtitle}</p>
  </div>
);

interface PowerFlowCardProps {
  live: LiveStatus;
  selfConsumptionPercent: number;
}

const PowerFlowCard: React.FC<PowerFlowCardProps> = ({
  live,
  selfConsumptionPercent,
}) => {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-sky-800/80 p-5 sm:p-6 shadow-lg shadow-slate-950/60">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold">Power Flow</p>
        <p className="text-xs text-slate-400">kW right now (static)</p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
        <FlowBox title="To Home" value={live.toHomeKw} subtitle="Direct usage" />
        <FlowBox title="Battery" value={live.toBatteryKw} subtitle="Charging" />
        <FlowBox title="To Grid" value={live.toGridKw} subtitle="Exported" />
      </div>
      <div className="mt-4 text-[0.7rem] text-slate-400">
        {Math.round(selfConsumptionPercent)}% of current solar is consumed
        on-site. The rest is exported to the grid.
      </div>
    </div>
  );
};

export default PowerFlowCard;
