export interface Feeder {
  name: string;
  category: 'luxury' | 'basic' | 'economy';
  categoryLabel: string;
  price: string;
  type: string;
  material: string;
  capacity: string;
  ports: number;
  antMoat: boolean;
  beeGuards: boolean;
  perch: boolean;
  dishwasherSafe: boolean;
  leakProof: 'yes' | 'mostly' | 'can drip';
  cleaningEase: number; // 1-5 stars
  durability: number; // 1-5 stars
  amazonUrl: string;
  whyRecommend: string;
  cleaningExperience: string[];
  keyFeatures: string[];
  considerations?: string[];
  bestFor: string;
}

export const feeders: Feeder[] = [
  {
    name: 'Aspects HummZinger HighView 12oz',
    category: 'luxury',
    categoryLabel: 'Best Overall',
    price: '$25\u201330',
    type: 'Saucer/Dish',
    material: 'Polycarbonate (unbreakable)',
    capacity: '12 oz',
    ports: 4,
    antMoat: true,
    beeGuards: true,
    perch: true,
    dishwasherSafe: false,
    leakProof: 'yes',
    cleaningEase: 5,
    durability: 5,
    amazonUrl: 'https://www.amazon.com/dp/B003XL7WZO/',
    whyRecommend: 'Consistently rated #1 by birding experts. Its saucer design means nectar sits below feeding ports\u2014it\'s physically impossible for it to leak or drip.',
    cleaningExperience: [
      'Lid twists off with quarter-turn',
      'Entire dish is one smooth piece\u2014no crevices',
      'Wide, open design lets you see everything',
      'Scrub with bottle brush in seconds',
    ],
    keyFeatures: [
      'Built-in ant moat in the center (fill with water)',
      'HighView perch lets birds rest comfortably while feeding',
      'Polycarbonate construction won\'t crack, fade, or break',
      'Made in USA',
    ],
    bestFor: 'Serious birders who want reliability and minimal maintenance.',
  },
  {
    name: 'More Birds Garnet Glass 20oz',
    category: 'basic',
    categoryLabel: 'Best Glass',
    price: '$15\u201320',
    type: 'Bottle',
    material: 'Glass bottle, plastic base',
    capacity: '20 oz',
    ports: 5,
    antMoat: false,
    beeGuards: true,
    perch: true,
    dishwasherSafe: false,
    leakProof: 'mostly',
    cleaningEase: 4,
    durability: 4,
    amazonUrl: 'https://www.amazon.com/dp/B007G2P0SW/',
    whyRecommend: 'A classic glass bottle feeder with capacity to serve multiple birds without constant refilling. The glass reservoir won\'t degrade in sunlight like plastic.',
    cleaningExperience: [
      'Top and bottom twist apart easily',
      'Glass bottle is smooth inside\u2014no grooves',
      'Wide mouth for scrub brush access',
      'Requires more careful handling (glass can break)',
    ],
    keyFeatures: [
      '20 oz capacity\u2014lasts 3\u20136 days with moderate traffic',
      '5 feeding ports\u2014accommodates multiple birds',
      'Glass construction\u2014doesn\'t retain odors or stains',
      'Clear body\u2014easy to see nectar level',
    ],
    considerations: [
      'Heavier when full (needs sturdy hook)',
      'No built-in ant moat (purchase separately ~$5\u20138)',
      'Bottle design can drip if gasket seal isn\'t perfect',
    ],
    bestFor: 'Those who prefer glass aesthetics and don\'t mind extra weight.',
  },
  {
    name: 'First Nature 3055 16oz',
    category: 'economy',
    categoryLabel: 'Best Value',
    price: '$8\u201312',
    type: 'Bottle',
    material: 'Plastic',
    capacity: '16 oz',
    ports: 10,
    antMoat: false,
    beeGuards: true,
    perch: true,
    dishwasherSafe: true,
    leakProof: 'can drip',
    cleaningEase: 3,
    durability: 3,
    amazonUrl: 'https://www.amazon.com/dp/B000GDLLJS/',
    whyRecommend: 'The best-selling hummingbird feeder on Amazon for good reason: it works, it\'s cheap, and the wide-mouth design makes cleaning surprisingly easy for a budget option.',
    cleaningExperience: [
      'Two-piece design separates easily',
      'Wide 3-inch opening\u2014can fit hand inside bottle',
      'Dishwasher safe (top rack)',
      'Red plastic can stain over time but doesn\'t affect function',
    ],
    keyFeatures: [
      '10 feeding ports\u2014great for high-traffic areas',
      'Wide mouth\u2014easiest bottle-style feeder to fill and clean',
      'Bright red base\u2014highly visible to hummingbirds',
      'Affordable\u2014can buy multiple to spread around yard',
    ],
    considerations: [
      'Plastic can degrade/fade after 2\u20133 seasons in sun',
      'No ant moat (need separate moat or ant guard)',
      'Can leak slightly from ports in extreme heat',
    ],
    bestFor: 'Beginners, those on a budget, or anyone wanting multiple feeders.',
  },
];

export interface CleaningStep {
  frequency: string;
  task: string;
  method: string;
}

export const cleaningProtocol: CleaningStep[] = [
  { frequency: 'Every 2\u20133 days (summer)', task: 'Change nectar', method: 'Dump old, rinse, refill' },
  { frequency: 'Every 5\u20137 days (spring/fall)', task: 'Change nectar', method: 'Dump old, rinse, refill' },
  { frequency: 'Weekly', task: 'Deep clean', method: 'Hot water + bottle brush, no soap' },
  { frequency: 'Monthly', task: 'Sanitize', method: '1:10 bleach:water solution, rinse thoroughly' },
  { frequency: 'As needed', task: 'Mold removal', method: 'White vinegar soak 1\u20132 hours, scrub, rinse' },
];
