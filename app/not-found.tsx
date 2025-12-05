"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-900 via-sky-950 to-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-slate-950/70 border border-sky-800/80 rounded-3xl px-6 py-8 shadow-xl shadow-slate-950/70 text-center">
        {/* Icon / badge */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-900/60 border border-sky-500/70">
          <div className="h-10 w-10 rounded-full bg-slate-900 border border-sky-500/60 flex items-center justify-center overflow-hidden">
            {/* logo image or emoji */}
            {/* If you have /public/logo.svg, use that instead */}
            <Image
              src="/logo.png"
              alt="SolarDash logo"
              width={28}
              height={28}
              className="object-contain rounded-full"
            />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-sm text-slate-300 mb-5">
          This route isn&apos;t wired into your solar system yet.
          <br />
          Check the URL or go back to your main dashboard.
        </p>

        {/* Info card */}
        <div className="mb-6 rounded-2xl bg-slate-900/80 border border-sky-800/80 px-4 py-3 text-left text-xs text-slate-300">
          <p className="font-semibold text-slate-100 mb-1">
            404 · Lost in the grid
          </p>
          <p>
            The page you&apos;re looking for is offline or doesn&apos;t exist.
            Your dashboard, however, is still generating insights.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition"
          >
            ⬅ Back to dashboard
          </Link>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex justify-center items-center px-4 py-2 rounded-full border border-slate-600 text-slate-200 text-sm font-medium hover:bg-slate-800/80 transition"
          >
            🔁 Try reloading
          </button>
        </div>
      </div>
    </div>
  );
}
