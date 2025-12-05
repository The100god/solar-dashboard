// components/dashboard/SelfConsumptionCard.tsx

interface SelfConsumptionCardProps {
  selfConsumptionPercent: number;
}

const StatRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex items-center justify-between">
    <span className="text-slate-300">{label}</span>
    <span className="font-semibold text-slate-50">{value}</span>
  </div>
);

const SelfConsumptionCard: React.FC<SelfConsumptionCardProps> = ({
  selfConsumptionPercent,
}) => {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-sky-800/80 p-5 sm:p-6 shadow-lg shadow-slate-950/60">
      <p className="text-sm font-semibold mb-3">Self-Consumption & Grid</p>
      <div className="space-y-2 text-xs sm:text-sm">
        <StatRow
          label="Self-consumption"
          value={`${Math.round(selfConsumptionPercent)}%`}
        />
        <StatRow label="Energy exported today" value="2.4 kWh" />
        <StatRow label="Energy imported from grid today" value="3.1 kWh" />
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-[0.7rem] text-slate-300 mb-1">
          <span>Usage split today</span>
          <span>Solar vs Grid</span>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
          <div
            className="bg-emerald-400"
            style={{ width: `${selfConsumptionPercent}%` }}
          />
          <div
            className="bg-sky-500 flex-1"
            style={{ width: `${100 - selfConsumptionPercent}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[0.7rem] text-slate-400">
          <span>Solar used on-site</span>
          <span>Grid import</span>
        </div>
      </div>
    </div>
  );
};

export default SelfConsumptionCard;
