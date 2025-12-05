export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="max-w-md text-center space-y-3">
        <h1 className="text-2xl font-semibold">You&apos;re offline</h1>
        <p className="text-sm text-slate-300">
          The last data you saw is still available. 
          Reconnect to refresh your solar stats.
        </p>
      </div>
    </div>
  );
}
