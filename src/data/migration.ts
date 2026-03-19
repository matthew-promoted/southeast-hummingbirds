export interface RegionData {
  region: string;
  zone: string;
  springArrival: string;
  peakActivity: string;
  fallDeparture: string;
  notes: string;
  states: string[];
  lat: [number, number]; // rough lat range for matching
}

export const regions: RegionData[] = [
  {
    region: 'South Florida',
    zone: 'Coastal',
    springArrival: 'Mid-February',
    peakActivity: 'March\u2013September',
    fallDeparture: 'Late October',
    notes: 'Some overwinter; earliest arrivals in SE US',
    states: ['FL'],
    lat: [25.0, 27.0],
  },
  {
    region: 'Central Florida',
    zone: 'Inland',
    springArrival: 'Late February',
    peakActivity: 'March\u2013September',
    fallDeparture: 'Mid-October',
    notes: '',
    states: ['FL'],
    lat: [27.0, 29.0],
  },
  {
    region: 'North Florida',
    zone: 'Piedmont',
    springArrival: 'Early March',
    peakActivity: 'April\u2013September',
    fallDeparture: 'Early October',
    notes: '',
    states: ['FL'],
    lat: [29.0, 31.0],
  },
  {
    region: 'South Georgia / South Alabama',
    zone: 'Coastal Plain',
    springArrival: 'Late February\u2013Early March',
    peakActivity: 'March\u2013September',
    fallDeparture: 'Mid-October',
    notes: 'Near Gulf Coast',
    states: ['GA', 'AL'],
    lat: [30.5, 32.5],
  },
  {
    region: 'Central Georgia / Central Alabama',
    zone: 'Piedmont',
    springArrival: 'Mid-March',
    peakActivity: 'April\u2013September',
    fallDeparture: 'Early October',
    notes: 'Atlanta metro area',
    states: ['GA', 'AL'],
    lat: [32.5, 34.0],
  },
  {
    region: 'North Georgia / North Alabama',
    zone: 'Mountains',
    springArrival: 'Late March\u2013Early April',
    peakActivity: 'May\u2013August',
    fallDeparture: 'Late September',
    notes: 'Higher elevation = later arrival',
    states: ['GA', 'AL'],
    lat: [34.0, 35.5],
  },
  {
    region: 'South Carolina Coast',
    zone: 'Coastal',
    springArrival: 'Early March',
    peakActivity: 'March\u2013September',
    fallDeparture: 'Mid-October',
    notes: 'Charleston area',
    states: ['SC'],
    lat: [32.0, 33.0],
  },
  {
    region: 'South Carolina Midlands',
    zone: 'Piedmont',
    springArrival: 'Mid-March',
    peakActivity: 'April\u2013September',
    fallDeparture: 'Early October',
    notes: 'Columbia area',
    states: ['SC'],
    lat: [33.0, 34.5],
  },
  {
    region: 'South Carolina Upstate',
    zone: 'Mountains',
    springArrival: 'Late March',
    peakActivity: 'April\u2013September',
    fallDeparture: 'Late September',
    notes: 'Greenville area',
    states: ['SC'],
    lat: [34.5, 35.5],
  },
];

export type SeasonStatus = 'before' | 'peak' | 'late' | 'after';

export interface StatusMessage {
  status: SeasonStatus;
  title: string;
  message: string;
  color: string;
}

/** Rough month-number mapping for season detection */
function parseArrivalMonth(arrival: string): number {
  if (arrival.includes('February')) return 2;
  if (arrival.includes('March')) return 3;
  if (arrival.includes('April')) return 4;
  return 3; // default
}

function parseDepartureMonth(departure: string): number {
  if (departure.includes('September')) return 9;
  if (departure.includes('October')) return 10;
  if (departure.includes('November')) return 11;
  return 10;
}

export function getSeasonStatus(region: RegionData, month: number): StatusMessage {
  const arrivalMonth = parseArrivalMonth(region.springArrival);
  const departureMonth = parseDepartureMonth(region.fallDeparture);

  if (month < arrivalMonth - 1) {
    return {
      status: 'before',
      title: 'Hummingbirds are coming soon!',
      message: `Based on historical data for ${region.region}, expect Ruby-throated Hummingbirds to arrive around ${region.springArrival}. Put your feeders out 1\u20132 weeks early to catch the scouts!`,
      color: 'blue',
    };
  }

  if (month >= arrivalMonth && month <= departureMonth - 1) {
    return {
      status: 'peak',
      title: 'Hummingbirds are active!',
      message: `You\u2019re in peak season in ${region.region} (through ${region.fallDeparture}). Keep feeders clean and nectar fresh\u2014change it every 2\u20133 days in hot weather.`,
      color: 'green',
    };
  }

  if (month === departureMonth) {
    return {
      status: 'late',
      title: 'Migration is underway!',
      message: `Hummingbirds in ${region.region} typically depart by ${region.fallDeparture}. Keep your feeders up at least 2 more weeks to help stragglers fuel up for their journey south.`,
      color: 'orange',
    };
  }

  return {
    status: 'after',
    title: 'Hummingbirds have migrated south',
    message: `Ruby-throated Hummingbirds have headed south for the winter. They\u2019ll return to ${region.region} around ${region.springArrival}. Consider leaving one feeder up\u2014rare winter visitors like Rufous Hummingbirds occasionally appear!`,
    color: 'gray',
  };
}

export function findRegionByCoords(lat: number, lng: number): RegionData | null {
  // Check if roughly in the Southeast US
  if (lng < -90 || lng > -79 || lat < 24 || lat > 36) return null;

  // Find best matching region by latitude
  for (const region of regions) {
    if (lat >= region.lat[0] && lat < region.lat[1]) {
      return region;
    }
  }

  return regions[4]; // Default: Central Georgia/Alabama
}
