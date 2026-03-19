export interface Plant {
  name: string;
  scientificName: string;
  bloomTime: string;
  light: string;
  water: string;
  height: string;
  notes: string;
  tier: 'top' | 'mid';
  type: 'vine' | 'perennial' | 'annual' | 'biennial';
}

export interface PlantShrub {
  name: string;
  scientificName: string;
  bloomTime: string;
  notes: string;
}

export const topTierPlants: Plant[] = [
  {
    name: 'Coral Honeysuckle',
    scientificName: 'Lonicera sempervirens',
    bloomTime: 'Mar\u2013Oct',
    light: 'Full sun to part shade',
    water: 'Medium',
    height: 'Vine (10\u201320 ft)',
    notes: 'Native throughout Southeast; semi-evergreen; red tubular flowers',
    tier: 'top',
    type: 'vine',
  },
  {
    name: 'Cardinal Flower',
    scientificName: 'Lobelia cardinalis',
    bloomTime: 'Jun\u2013Sep',
    light: 'Part shade to full sun',
    water: 'Wet to moist',
    height: '2\u20134 ft',
    notes: 'Brilliant red spikes; needs consistent moisture; thrives near streams/ponds',
    tier: 'top',
    type: 'perennial',
  },
  {
    name: 'Trumpet Vine',
    scientificName: 'Campsis radicans',
    bloomTime: 'Jun\u2013Sep',
    light: 'Full sun',
    water: 'Low\u2013medium',
    height: 'Vine (30+ ft)',
    notes: 'Aggressive grower\u2014needs sturdy support; orange-red trumpets; native',
    tier: 'top',
    type: 'vine',
  },
  {
    name: 'Scarlet Sage',
    scientificName: 'Salvia coccinea',
    bloomTime: 'May\u2013frost',
    light: 'Full sun to part shade',
    water: 'Medium',
    height: '1\u20133 ft',
    notes: 'Self-seeds readily; red/coral flowers; annual in cooler areas',
    tier: 'top',
    type: 'annual',
  },
  {
    name: 'Bee Balm',
    scientificName: 'Monarda didyma',
    bloomTime: 'Jun\u2013Aug',
    light: 'Full sun to part shade',
    water: 'Medium',
    height: '2\u20134 ft',
    notes: 'Red varieties most attractive to hummers; can spread',
    tier: 'top',
    type: 'perennial',
  },
  {
    name: 'Cross Vine',
    scientificName: 'Bignonia capreolata',
    bloomTime: 'Apr\u2013May',
    light: 'Part shade to full sun',
    water: 'Medium',
    height: 'Vine (30\u201350 ft)',
    notes: 'Orange-red flowers; semi-evergreen; native to Southeast',
    tier: 'top',
    type: 'vine',
  },
];

export const midTierPlants: Plant[] = [
  {
    name: 'Fire Pink',
    scientificName: 'Silene virginica',
    bloomTime: 'Apr\u2013Jun',
    light: 'Part shade',
    water: 'Medium',
    height: '1\u20132 ft',
    notes: 'Brilliant red; short-lived perennial; woodland edges',
    tier: 'mid',
    type: 'perennial',
  },
  {
    name: 'Indian Pink',
    scientificName: 'Spigelia marilandica',
    bloomTime: 'May\u2013Jun',
    light: 'Part shade',
    water: 'Medium',
    height: '1\u20132 ft',
    notes: 'Red/yellow tubular flowers; native to Southeast; deer resistant',
    tier: 'mid',
    type: 'perennial',
  },
  {
    name: 'Standing Cypress',
    scientificName: 'Ipomopsis rubra',
    bloomTime: 'May\u2013Jul',
    light: 'Full sun',
    water: 'Low',
    height: '2\u20136 ft',
    notes: 'Biennial; feathery foliage; red tubular flowers',
    tier: 'mid',
    type: 'biennial',
  },
  {
    name: 'Red Buckeye',
    scientificName: 'Aesculus pavia',
    bloomTime: 'Mar\u2013Apr',
    light: 'Part shade',
    water: 'Medium',
    height: '10\u201320 ft (shrub/small tree)',
    notes: 'Early bloomer\u2014feeds first spring arrivals',
    tier: 'mid',
    type: 'perennial',
  },
  {
    name: 'Wild Columbine',
    scientificName: 'Aquilegia canadensis',
    bloomTime: 'Mar\u2013May',
    light: 'Part shade',
    water: 'Medium',
    height: '1\u20132 ft',
    notes: 'Red and yellow; early season; self-seeds',
    tier: 'mid',
    type: 'perennial',
  },
  {
    name: 'Spotted Jewelweed',
    scientificName: 'Impatiens capensis',
    bloomTime: 'Jul\u2013Oct',
    light: 'Part shade',
    water: 'Wet',
    height: '2\u20135 ft',
    notes: 'Orange flowers; annual; loves moist areas',
    tier: 'mid',
    type: 'annual',
  },
];

export const shrubs: PlantShrub[] = [
  { name: 'Bottlebrush Buckeye', scientificName: 'Aesculus parviflora', bloomTime: 'Jun\u2013Jul', notes: 'Large shrub; white flowers; native to Southeast' },
  { name: 'Plumleaf Azalea', scientificName: 'Rhododendron prunifolium', bloomTime: 'Jul\u2013Aug', notes: 'Late-blooming native azalea; orange-red; rare' },
  { name: 'Native Azaleas', scientificName: 'Rhododendron spp.', bloomTime: 'Mar\u2013May', notes: 'Many Southeast natives; prefer acidic soil' },
  { name: 'Buttonbush', scientificName: 'Cephalanthus occidentalis', bloomTime: 'Jun\u2013Aug', notes: 'Wetland shrub; white ball-shaped flowers' },
];

export interface BloomMonth {
  month: string;
  plants: string[];
}

export const bloomCalendar: BloomMonth[] = [
  { month: 'March', plants: ['Red Buckeye', 'Wild Columbine', 'Coral Honeysuckle'] },
  { month: 'April', plants: ['Cross Vine', 'Native Azaleas', 'Coral Honeysuckle', 'Fire Pink'] },
  { month: 'May', plants: ['Indian Pink', 'Standing Cypress', 'Scarlet Sage'] },
  { month: 'June', plants: ['Cardinal Flower', 'Trumpet Vine', 'Bee Balm'] },
  { month: 'July', plants: ['Cardinal Flower', 'Bee Balm', 'Plumleaf Azalea'] },
  { month: 'August', plants: ['Cardinal Flower', 'Trumpet Vine', 'Scarlet Sage'] },
  { month: 'September', plants: ['Scarlet Sage', 'Spotted Jewelweed', 'Cardinal Flower'] },
  { month: 'October', plants: ['Coral Honeysuckle', 'Scarlet Sage'] },
];
