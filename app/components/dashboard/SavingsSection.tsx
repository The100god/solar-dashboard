// components/dashboard/SavingsSection.tsx
import { SavingsSummary } from "@/lib/solarData";

interface SavingsSectionProps {
  savings: SavingsSummary;
}

const SavingsCard: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="rounded-2xl bg-slate-950/60 border border-slate-700 p-3">
    <p className="text-[0.7rem] text-slate-300">{label}</p>
    <p className="mt-1 text-lg font-semibold">{value}</p>
  </div>
);

const SavingsSection: React.FC<SavingsSectionProps> = ({ savings }) => {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-sky-800/80 p-5 sm:p-6 shadow-lg shadow-slate-950/60">
      <p className="text-sm font-semibold mb-3">Savings & Impact</p>
      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
        <SavingsCard
          label="Saved today"
          value={`${savings.currency}${savings.savedToday.toFixed(2)}`}
        />
        <SavingsCard
          label="This month"
          value={`${savings.currency}${savings.savedMonth.toFixed(0)}`}
        />
        <SavingsCard
          label="This year"
          value={`${savings.currency}${savings.savedYear.toFixed(0)}`}
        />
        <SavingsCard
          label="Total since install"
          value={`${savings.currency}${savings.savedLifetime.toFixed(0)}`}
        />
      </div>

      <div className="mt-4">
        <p className="text-xs text-slate-300 mb-1">Payback progress</p>
        <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-amber-400"
            style={{ width: `${savings.paybackPercent}%` }}
          />
        </div>
        <p className="mt-1 text-[0.75rem] text-slate-400">
          {savings.paybackPercent}% of system cost recovered
        </p>
      </div>

      <div className="mt-4 text-xs text-slate-300">
        CO₂ avoided so far:{" "}
        <span className="font-semibold">
          {savings.co2SavedKgLifetime} kg
        </span>{" "}
        (~{Math.round(savings.co2SavedKgLifetime / 22)} trees planted)
      </div>
    </div>
  );
};

export default SavingsSection;
