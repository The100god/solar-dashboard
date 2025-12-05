// lib/solarData.ts

export type WeatherIcon = "sunny" | "cloudy" | "rain" | "partly_cloudy";

export interface LiveStatus {
  timestamp: string;
  solarPowerNowKw: number;
  productionTodayKwh: number;
  temperatureC: number;
  weatherIcon: WeatherIcon;
  toHomeKw: number;
  toBatteryKw: number;
  toGridKw: number;
  homeConsumptionKw: number;
  battery?: {
    socPercent: number;
    powerKw: number; // +ve charging, -ve discharging
    estimatedHoursRemaining: number;
    health: "good" | "warning" | "replace_soon";
  };
}

export interface EnergyPoint {
  label: string;
  value: number;
}

export interface SavingsSummary {
  currency: string;
  savedToday: number;
  savedMonth: number;
  savedYear: number;
  savedLifetime: number;
  co2SavedKgLifetime: number;
  paybackPercent: number;
}

export type Range = "day" | "week" | "month" | "year";

// --- fake “live” status ---
export const MOCK_LIVE: LiveStatus = {
  timestamp: "2025-02-12T12:05:00Z",
  solarPowerNowKw: 3.19,
  productionTodayKwh: 9.8,
  temperatureC: 13,
  weatherIcon: "partly_cloudy",
  toHomeKw: 1.56,
  toBatteryKw: 1.03,
  toGridKw: 0.6,
  homeConsumptionKw: 2.1,
  battery: {
    socPercent: 67,
    powerKw: 0.8,
    estimatedHoursRemaining: 6.2,
    health: "good",
  },
};

// --- fake energy history ---
const ENERGY_DAY: EnergyPoint[] = [
  { label: "6:00", value: 0.2 },
  { label: "8:00", value: 0.8 },
  { label: "10:00", value: 1.8 },
  { label: "12:00", value: 2.3 },
  { label: "14:00", value: 2.0 },
  { label: "16:00", value: 1.4 },
  { label: "18:00", value: 0.5 },
];

const ENERGY_WEEK: EnergyPoint[] = [
  { label: "Mon", value: 8.4 },
  { label: "Tue", value: 9.1 },
  { label: "Wed", value: 7.2 },
  { label: "Thu", value: 10.3 },
  { label: "Fri", value: 9.8 },
  { label: "Sat", value: 11.0 },
  { label: "Sun", value: 6.9 },
];

const ENERGY_MONTH: EnergyPoint[] = [
  { label: "W1", value: 54 },
  { label: "W2", value: 61 },
  { label: "W3", value: 49 },
  { label: "W4", value: 63 },
];

const ENERGY_YEAR: EnergyPoint[] = [
  { label: "Jan", value: 280 },
  { label: "Feb", value: 310 },
  { label: "Mar", value: 410 },
  { label: "Apr", value: 520 },
  { label: "May", value: 610 },
  { label: "Jun", value: 640 },
  { label: "Jul", value: 630 },
  { label: "Aug", value: 590 },
  { label: "Sep", value: 470 },
  { label: "Oct", value: 390 },
  { label: "Nov", value: 260 },
  { label: "Dec", value: 220 },
];

export const MOCK_SAVINGS: SavingsSummary = {
  currency: "€",
  savedToday: 3.4,
  savedMonth: 92,
  savedYear: 540,
  savedLifetime: 2350,
  co2SavedKgLifetime: 1240,
  paybackPercent: 38,
};

export const weatherLabel: Record<WeatherIcon, string> = {
  sunny: "Sunny",
  cloudy: "Cloudy",
  rain: "Rain",
  partly_cloudy: "Partly cloudy",
};

export function getEnergyData(range: Range): EnergyPoint[] {
  switch (range) {
    case "day":
      return ENERGY_DAY;
    case "week":
      return ENERGY_WEEK;
    case "month":
      return ENERGY_MONTH;
    case "year":
      return ENERGY_YEAR;
    default:
      return ENERGY_DAY;
  }
}
