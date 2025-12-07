"use client";

import React, { useState } from "react";
import HeaderBar, { DashboardTab } from "./components/layout/HeaderBar";
import LiveSolarCard from "./components/dashboard/LiveSolarCard";
import PowerFlowCard from "./components/dashboard/PowerFlowCard";
import EnergyChartCard from "./components/dashboard/EnergyChartCard";
import BatteryCard from "./components/dashboard/BatteryCard";
import SelfConsumptionCard from "./components/dashboard/SelfConsumptionCard";
import SavingsSection from "./components/dashboard/SavingsSection";
import { MOCK_LIVE, MOCK_SAVINGS, Range } from "../lib/solarData";
import Footer from "./components/layout/Footer";
import DashboardTabs from "./components/layout/DashboardTabs";
import ContactInfo from "./components/dashboard/ContactInfo";

const SolarDashboardPage: React.FC = () => {
  const [range, setRange] = useState<Range>("day");
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");

  const live = MOCK_LIVE;

  const selfConsumptionPercent =
    (100 * (live.toHomeKw + live.toBatteryKw)) /
    Math.max(live.toHomeKw + live.toBatteryKw + live.toGridKw, 0.0001);

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-900 via-sky-950 to-slate-950 text-slate-50 flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl space-y-6">
        <HeaderBar live={live} />
        <DashboardTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
    
{activeTab === "overview" && (
        <div className="grid gap-5 lg:grid-cols-[3fr,2fr]">
          <section className="space-y-5">
            <LiveSolarCard
              live={live}
              selfConsumptionPercent={selfConsumptionPercent}
            />
            <PowerFlowCard
              live={live}
              selfConsumptionPercent={selfConsumptionPercent}
            />
            <EnergyChartCard range={range} onRangeChange={setRange} />
            
          </section>

          <section className="space-y-5">
            <BatteryCard live={live} />
            <SelfConsumptionCard selfConsumptionPercent={selfConsumptionPercent} />
            <SavingsSection savings={MOCK_SAVINGS} />
            <ContactInfo />
          </section>
        </div>
        )}
        {activeTab === "production" && (
          <div className="space-y-5">
            <LiveSolarCard
              live={live}
              selfConsumptionPercent={selfConsumptionPercent}
            />
            <ContactInfo />
          </div>
        )}
        {activeTab === "flow" && (
          <div className="space-y-5">
            <PowerFlowCard
              live={live}
              selfConsumptionPercent={selfConsumptionPercent}
            />
            <ContactInfo />
          </div>
        )}

        {activeTab === "battery" && (
          <div className="space-y-5">
            <BatteryCard live={live} />
            <ContactInfo />
          </div>
        )}
        {activeTab === "consumption" && (
          <div className="space-y-5">
            <SelfConsumptionCard selfConsumptionPercent={selfConsumptionPercent} />
            <ContactInfo />
          </div>
        )}

        {activeTab === "savings" && (
          <div className="space-y-5">
            <SavingsSection savings={MOCK_SAVINGS} />
            <EnergyChartCard range={range} onRangeChange={setRange} />
            <ContactInfo />
          </div>
        )}
        {activeTab === "contact" && (
          <div className="space-y-5">
            <ContactInfo />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default SolarDashboardPage;
