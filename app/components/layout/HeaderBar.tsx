import Image from "next/image";
import { LiveStatus, weatherLabel } from "@/lib/solarData";

export type DashboardTab = "overview" | "flow" | "consumption" | "production" | "battery" | "savings" | string;

interface HeaderBarProps {
  live: LiveStatus;
  // activeTab: DashboardTab;
  // onTabChange: (tab: DashboardTab) => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ live }) => {
  // const tabs: { id: DashboardTab; label: string }[] = [
  //   { id: "overview", label: "Overview" },
  //   { id: "flow", label: "Power Flow" },
  //   { id: "battery", label: "Battery" },
  //   { id: "savings", label: "Savings" },
  // ];
// const navRef = useRef<HTMLDivElement>(null);
//   const [isStuck, setIsStuck] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!navRef.current) return;

  //     const { top } = navRef.current.getBoundingClientRect();

  //     // When top reaches 0 → activate sticky mode
  //     if (top <= 0 && !isStuck) {
  //       setIsStuck(true);
  //     }

  //     // When scrolling back up → deactivate sticky mode
  //     if (window.scrollY < 80 && isStuck) {
  //       setIsStuck(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isStuck]);

  

  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left: logo + title */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-white border-2 border-sky-950 flex items-center justify-center overflow-hidden p-1">
          <Image
            src="/logo.svg"
            alt="SolarDash logo"
            width={28}
            height={28}
            className="object-center rounded-t-sm bg-transparent bg-blend-color-dodge"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            Greenlay Solar India
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            Smith Residence • Updated 1 min ago (static demo data)
          </p>
        </div>
      </div>

      {/* Right: status + nav */}
      <div className="flex flex-col items-end gap-2 w-full md:w-auto">
        <div className="flex items-center justify-end gap-3 text-xs md:text-sm text-slate-300 w-full md:w-auto">
          <span className="inline-flex justify-between items-center text-xs md:text-sm gap-1 px-2 py-1 rounded-full bg-sky-800/60 border border-sky-500/50">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live-style
          </span>
          <span className="mt-1 md:mt-0 flex items-center gap-1 text-center">
            {live.temperatureC.toFixed(0)}°C • {weatherLabel[live.weatherIcon]}
          </span>
        </div>

        {/* Tabs / Nav buttons */}
        {/* <nav ref={navRef} className={`transition-all duration-300 mt-1 w-full md:w-auto sticky top-0 z-100 backdrop-blur-sm ${isStuck 
          ? "sticky top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-800" 
          : "relative bg-transparent"
        }`}>
          <ul className="flex flex-wrap gap-2 justify-center md:justify-end">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm transition border ${
                    activeTab === tab.id
                      ? "bg-sky-500 text-slate-950 border-sky-400"
                      : "bg-slate-900/60 text-slate-200 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default HeaderBar;
