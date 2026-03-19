import { useState } from 'preact/hooks';
import { regions, findRegionByCoords, getSeasonStatus, type RegionData } from '../data/migration';

export default function HummingbirdStatus() {
  const [region, setRegion] = useState<RegionData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [manualMode, setManualMode] = useState(false);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setManualMode(true);
      return;
    }

    setLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const found = findRegionByCoords(latitude, longitude);
        if (found) {
          setRegion(found);
        } else {
          setError('It looks like you\'re outside our coverage area (GA, FL, SC, AL). Select your region manually:');
          setManualMode(true);
        }
        setLoading(false);
      },
      () => {
        setError('Location access was denied. Select your region manually:');
        setManualMode(true);
        setLoading(false);
      },
      { timeout: 10000 }
    );
  };

  const handleManualSelect = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const idx = parseInt(target.value, 10);
    if (!isNaN(idx)) {
      setRegion(regions[idx]);
      setError('');
    }
  };

  const month = new Date().getMonth() + 1;
  const status = region ? getSeasonStatus(region, month) : null;

  const statusColors = {
    green: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: '🟢', accent: 'text-emerald-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: '🔵', accent: 'text-blue-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: '🟠', accent: 'text-orange-700' },
    gray: { bg: 'bg-gray-50', border: 'border-gray-200', icon: '⚪', accent: 'text-gray-600' },
  };

  const colors = status ? statusColors[status.color as keyof typeof statusColors] : null;

  return (
    <div class="rounded-2xl border-2 border-emerald-100 bg-white shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-4">
        <h3 class="text-white font-bold text-lg font-[DM_Sans]">Are Hummingbirds in Your Area?</h3>
        <p class="text-emerald-100 text-sm mt-1">Find out what's happening with hummingbird activity near you</p>
      </div>

      <div class="p-6">
        {!region && !manualMode && (
          <div class="text-center">
            <button
              onClick={detectLocation}
              disabled={loading}
              class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-wait"
            >
              {loading ? (
                <>
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Detecting location...
                </>
              ) : (
                <>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Use My Location
                </>
              )}
            </button>
            <button
              onClick={() => setManualMode(true)}
              class="block mx-auto mt-3 text-sm text-emerald-600 hover:text-emerald-700 underline"
            >
              Or select your region manually
            </button>
          </div>
        )}

        {error && (
          <p class="text-sm text-gray-600 mb-4">{error}</p>
        )}

        {manualMode && !region && (
          <div class="max-w-xs mx-auto">
            <select
              onChange={handleManualSelect}
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select your region...</option>
              {regions.map((r, i) => (
                <option value={i}>{r.region}</option>
              ))}
            </select>
          </div>
        )}

        {status && colors && (
          <div class={`${colors.bg} ${colors.border} border rounded-xl p-5 mt-2`}>
            <div class="flex items-start gap-3">
              <span class="text-2xl mt-0.5">{colors.icon}</span>
              <div>
                <h4 class={`font-bold text-lg ${colors.accent} font-[DM_Sans]`}>{status.title}</h4>
                <p class="text-gray-700 mt-1 text-sm leading-relaxed">{status.message}</p>
                {region && (
                  <p class="text-xs text-gray-500 mt-3">
                    Region: {region.region} ({region.zone})
                    <button
                      onClick={() => { setRegion(null); setManualMode(true); }}
                      class="ml-2 text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Change
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
