// components/dashboard/MiniBarChart.tsx
import { EnergyPoint } from "@/lib/solarData";

interface MiniBarChartProps {
  data: EnergyPoint[];
  unit: string;
  range?: string;
}

const MiniBarChart: React.FC<MiniBarChartProps> = ({ data, unit, range }) => {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={`mt-4 flex items-end gap-3 h-40 ${range === "year" || range === "week" ? "overflow-x-scroll md:overflow-hidden m-auto w-[80vw] md:w-full scrollbar-hide pb-1" : ""}`}>
      {data.map((point) => (
        <div key={point.label} className="flex flex-col items-center flex-1">
          <div
            className="w-6 rounded-t-md bg-emerald-400 shadow-md shadow-emerald-900/40"
            style={{
              height: `${(point.value / max) * 100}%`,
              minHeight: "6px",
            }}
          />
          <span className="mt-2 text-[0.7rem] text-slate-300">
            {point.label}
          </span>
          <span className="mt-1 text-[0.65rem] text-center text-slate-400">
            {point.value.toFixed(1)} {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MiniBarChart;
