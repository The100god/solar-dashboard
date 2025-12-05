// components/dashboard/EnergyChartCard.tsx
import { Range, getEnergyData } from "@/lib/solarData";
import MiniBarChart from "./MiniBarChart";

interface EnergyChartCardProps {
  range: Range;
  onRangeChange: (range: Range) => void;
}

const EnergyChartCard: React.FC<EnergyChartCardProps> = ({
  range,
  onRangeChange,
}) => {
  const energyData = getEnergyData(range);

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-sky-800/80 p-5 sm:p-6 shadow-lg shadow-slate-950/60">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">Energy Produced</p>
          <p className="text-xs text-slate-400">
            Static sample data • {range.toUpperCase()}
          </p>
        </div>
        <div className="flex gap-2 text-xs bg-slate-800/80 rounded-full p-1">
          {(["day", "week", "month", "year"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => onRangeChange(r)}
              className={`px-3 py-1 rounded-full transition ${
                range === r
                  ? "bg-sky-500 text-slate-950"
                  : "text-slate-300 hover:bg-slate-700/80"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <MiniBarChart
        data={energyData}
        range={range}
        unit={range === "day" ? "kW" : "kWh"}
      />
    </div>
  );
};

export default EnergyChartCard;
