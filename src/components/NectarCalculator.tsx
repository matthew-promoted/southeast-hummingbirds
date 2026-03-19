import { useState } from 'preact/hooks';

const presets = [
  { label: 'Small', cups: 1 },
  { label: 'Medium', cups: 2 },
  { label: 'Large', cups: 4 },
];

export default function NectarCalculator() {
  const [cups, setCups] = useState(1);

  const water = cups;
  const sugar = cups / 4;

  const formatFraction = (n: number): string => {
    if (n === 0.25) return '\u00BC';
    if (n === 0.5) return '\u00BD';
    if (n === 0.75) return '\u00BE';
    if (n === 1) return '1';
    if (n === 1.25) return '1\u00BC';
    if (n === 1.5) return '1\u00BD';
    if (n === 2) return '2';
    if (n === 2.5) return '2\u00BD';
    if (n === 3) return '3';
    return n.toFixed(1);
  };

  return (
    <div class="rounded-2xl border border-emerald-100 bg-white shadow-md overflow-hidden">
      <div class="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-4">
        <h3 class="text-white font-bold text-lg font-[DM_Sans]">Nectar Recipe Calculator</h3>
        <p class="text-emerald-100 text-sm mt-1">Always use a 4:1 ratio of water to plain white sugar</p>
      </div>

      <div class="p-6">
        <div class="flex gap-2 mb-6">
          {presets.map(p => (
            <button
              onClick={() => setCups(p.cups)}
              class={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                cups === p.cups
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-600 mb-2">
            Or set a custom batch size (cups of water):
          </label>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={cups}
            onInput={(e) => setCups(Number((e.target as HTMLInputElement).value))}
            class="w-full accent-emerald-600"
          />
          <div class="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 cup</span>
            <span>12 cups</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 rounded-xl p-4 text-center">
            <div class="text-3xl font-bold text-blue-700 font-[DM_Sans]">{cups}</div>
            <div class="text-sm text-blue-600 mt-1">{cups === 1 ? 'cup' : 'cups'} water</div>
          </div>
          <div class="bg-amber-50 rounded-xl p-4 text-center">
            <div class="text-3xl font-bold text-amber-700 font-[DM_Sans]">{formatFraction(sugar)}</div>
            <div class="text-sm text-amber-600 mt-1">{sugar <= 1 ? 'cup' : 'cups'} sugar</div>
          </div>
        </div>

        <div class="mt-5 p-4 bg-mint rounded-xl">
          <p class="text-sm text-gray-600">
            <strong class="text-gray-800">Instructions:</strong> Stir sugar into water until dissolved. No need to boil. Cool before filling feeder. Store extra in the fridge for up to 2 weeks.
          </p>
        </div>
      </div>
    </div>
  );
}
