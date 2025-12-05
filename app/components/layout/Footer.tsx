
const Footer = () => {
  return (
    <div className="flex relative items-center justify-center bottom-0 mt-2 w-full">
         {/* 🔒 HIDDEN COPYRIGHT / AUTHOR SIGNATURE */}
      <footer
        // aria-hidden="false"
        // data-owner="© Solar 2025 — Created by Saurabh Goyal"
        className="select-none pointer-events-none w-full bg-blend-color text-white/15 text-center text-xs md:text-sm border-t-2 overflow-hidden absolute pt-2 pb-1 border-slate-700/50"
      >
        All rights reserved. © Solar 2025 
        <span className="hidden">
          — Created by Saurabh Goyal
        </span> 
      </footer>

      {/* Extra invisible signature layer (harder to remove) */}
      {/* <style jsx>{`
        footer::after {
          content: attr(data-owner);
          visibility: visible;
        }
      `}</style> */}
    </div>
  )
}

export default Footer
