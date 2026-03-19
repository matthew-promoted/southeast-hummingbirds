import { useState } from 'preact/hooks';

interface FreshnessRange {
  min: number;
  max: number;
  label: string;
  changeDays: string;
  color: string;
  bg: string;
}

const ranges: FreshnessRange[] = [
  { min: 0, max: 70, label: 'Below 70°F', changeDays: 'Every 5–6 days', color: 'text-blue-700', bg: 'bg-blue-50' },
  { min: 70, max: 80, label: '70–80°F', changeDays: 'Every 4–5 days', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { min: 80, max: 90, label: '80–90°F', changeDays: 'Every 2–3 days', color: 'text-orange-700', bg: 'bg-orange-50' },
  { min: 90, max: 120, label: 'Above 90°F', changeDays: 'Every 1–2 days', color: 'text-red-700', bg: 'bg-red-50' },
];

export default function NectarFreshness() {
  const [temp, setTemp] = useState(78);

  const currentRange = ranges.find(r => temp >= r.min && temp < r.max) || ranges[ranges.length - 1];

  return (
    <div class="rounded-2xl border border-emerald-100 bg-white shadow-md overflow-hidden">
      <div class="bg-gradient-to-r from-ruby to-ruby-light px-6 py-4">
        <h3 class="text-white font-bold text-lg font-[DM_Sans]">When Should I Change My Nectar?</h3>
        <p class="text-red-100 text-sm mt-1">Nectar spoils faster in warm weather</p>
      </div>

      <div class="p-6">
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-600 mb-2">
            Current outdoor temperature:
          </label>
          <div class="flex items-center gap-4">
            <input
              type="range"
              min="40"
              max="110"
              value={temp}
              onInput={(e) => setTemp(Number((e.target as HTMLInputElement).value))}
              class="flex-1 accent-ruby"
            />
            <span class="text-2xl font-bold text-navy min-w-[4rem] text-right font-[DM_Sans]">{temp}°F</span>
          </div>
          <div class="flex justify-between text-xs text-gray-400 mt-1">
            <span>40°F</span>
            <span>110°F</span>
          </div>
        </div>

        <div class={`${currentRange.bg} rounded-xl p-5 text-center`}>
          <div class={`text-2xl font-bold ${currentRange.color} font-[DM_Sans]`}>
            {currentRange.changeDays}
          </div>
          <p class="text-sm text-gray-600 mt-2">
            At {currentRange.label}, change your nectar {currentRange.changeDays.toLowerCase()}.
          </p>
        </div>

        <div class="mt-5 p-4 bg-amber-50 rounded-xl">
          <p class="text-sm text-gray-700">
            <strong>Signs nectar has gone bad:</strong> cloudy appearance, floating particles, black mold spots, fermented smell, or stringy residue. Change immediately if you see any of these.
          </p>
        </div>
      </div>
    </div>
  );
}
