// components/dashboard/BatteryCard.tsx
import { LiveStatus } from "@/lib/solarData";

interface BatteryCardProps {
  live: LiveStatus;
}

const BatteryCard: React.FC<BatteryCardProps> = ({ live }) => {
  if (!live.battery) return null;

  const battery = live.battery;

  return (
    <div className="rounded-3xl bg-linear-to-br from-emerald-700 via-emerald-800 to-slate-900 p-5 sm:p-6 shadow-lg shadow-emerald-900/50">
      <p className="text-sm font-semibold flex items-center gap-2">
        Battery Status
        <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-emerald-900/70 border border-emerald-400/60 text-emerald-100">
          {battery.health === "good"
            ? "Healthy"
            : battery.health === "warning"
            ? "Check soon"
            : "Replace soon"}
        </span>
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="relative h-20 w-10 rounded-md border-2 border-emerald-200 bg-emerald-950/70 overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 bg-emerald-400"
            style={{ height: `${battery.socPercent}%` }}
          />
        </div>
        <div>
          <p className="text-3xl font-semibold">{battery.socPercent}%</p>
          <p className="text-xs text-emerald-100">
            {battery.powerKw >= 0 ? "Charging" : "Discharging"}{" "}
            {Math.abs(battery.powerKw).toFixed(2)} kW
          </p>
          <p className="text-xs text-emerald-100/80 mt-1">
            ~{battery.estimatedHoursRemaining.toFixed(1)} h remaining at current
            load
          </p>
        </div>
      </div>
    </div>
  );
};

export default BatteryCard;
