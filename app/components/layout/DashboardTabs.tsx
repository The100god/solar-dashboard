"use client";

import { useEffect, useRef, useState } from "react";
import { DashboardTab } from "./HeaderBar";
import { Activity, BadgeDollarSign, BatteryCharging, LayoutDashboard, PhoneCall, PieChart, SunMedium } from "lucide-react";

interface DashboardTabsProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const tabs: { id: DashboardTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "production", label: "Solar Production" },
  { id: "flow", label: "Power Flow" },
  { id: "battery", label: "Battery" },
  { id: "consumption", label: "Self-Consumption" },
  { id: "savings", label: "Savings" },
  { id: "contact", label: "Contact" },
];

const tabIcons: Record<DashboardTab, React.ReactNode> = {
  overview: <LayoutDashboard className="h-4 w-4 text-amber-300" />,
  production: <SunMedium className="h-4 w-4 text-amber-300" />,
  flow: <Activity className="h-4 w-4 text-red-500" />,
  battery: <BatteryCharging className="h-4 w-4 text-green-500" />,
  consumption: <PieChart className="h-4 w-4 text-pink-300" />,
  savings: <BadgeDollarSign className="h-4 w-4 text-amber-300" />,
  contact: <PhoneCall className="h-4 w-4 text-amber-300" />,
};

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setPlaceholderHeight(containerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const {top} = containerRef.current.getBoundingClientRect();
      if (top <= 0 && !isStuck) {
        setIsStuck(true);
      }

      // When scrolling back up → deactivate sticky mode
      if (window.scrollY < 80 && isStuck) {
        setIsStuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStuck]);

  return (
    <>
      {isStuck && (
        <div style={{ height: placeholderHeight }} aria-hidden="true"></div>
      )}

      <div
        ref={containerRef }
        className={`transition-all duration-300 z-30 
        ${
          isStuck
            ? "fixed top-0 left-0 right-0 bg-transparent backdrop-blur-xs shadow-md"
            : "relative bg-transparent"
        }`}
        style={{
          transitionProperty: "opacity, transform, background-color",
        }}
      >
        <nav className="w-full px-1 py-2">
          <ul
            className={`flex flex-wrap gap-1 w-full justify-center ${
              isStuck
                ? "justify-center transition-all duration-300"
                : "md:justify-end"
            }`}
          >
            {tabs.map((tab) => (
              <li key={tab.id} className="relative group">
                <button
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  className={` px-3 py-1.5 flex items-center justify-between gap-2 rounded-full text-xs md:text-sm transition border cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-sky-500 text-slate-950 border-sky-400"
                      : "bg-slate-900/60 text-slate-200 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  {/* icon on small screens */}
                  <span className="md:hidden flex items-center justify-center">
                    {tabIcons[tab.id]}
                  </span>

                  {/* label on md and above */}
                  <span className="hidden md:inline">{tab.label}</span>

                  {/* optional: keep icon on md+ too, remove if you don't want */}
                  {/* <span className="hidden md:inline-flex">{tabIcons[tab.id]}</span> */}

                </button>
                   <span
                  className="
                    md:hidden
                    absolute left-1/2 -translate-x-1/2 top-8 
                    bg-slate-800 text-slate-100 text-[10px] 
                    px-2 py-1 rounded-md whitespace-nowrap 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-200 pointer-events-none
                  "
                >
                  {tab.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DashboardTabs;
