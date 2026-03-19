export interface CalendarMonth {
  month: string;
  activity: string;
  tasks: string;
  intensity: 'low' | 'medium' | 'high' | 'peak';
}

export const seasonalCalendar: CalendarMonth[] = [
  {
    month: 'January',
    activity: 'Off-season (or rare visitors)',
    tasks: 'Clean and store most feeders; keep 1\u20132 up for winter visitors',
    intensity: 'low',
  },
  {
    month: 'February',
    activity: 'Early scouts arrive (South FL/GA)',
    tasks: 'Mid-month: Clean feeders, prepare nectar, put out 1\u20132 feeders',
    intensity: 'low',
  },
  {
    month: 'March',
    activity: 'Migration begins',
    tasks: 'Week 1: Feeders up (Central FL, Coastal GA/SC). Week 2\u20133: Feeders up (North FL, Piedmont). Watch for first arrivals!',
    intensity: 'medium',
  },
  {
    month: 'April',
    activity: 'Main arrival',
    tasks: 'Increase to 3\u20134 feeders; clean every 3\u20134 days; plant native flowers',
    intensity: 'medium',
  },
  {
    month: 'May',
    activity: 'Breeding season begins',
    tasks: 'Full complement of feeders; watch for nesting behavior; increase cleaning frequency as temps rise',
    intensity: 'high',
  },
  {
    month: 'June',
    activity: 'Peak breeding',
    tasks: 'Clean every 2\u20133 days; watch for fledglings; deadhead flowers',
    intensity: 'high',
  },
  {
    month: 'July',
    activity: 'Peak activity',
    tasks: 'Highest feeder traffic; juveniles appear; clean every 2 days in heat',
    intensity: 'peak',
  },
  {
    month: 'August',
    activity: 'Early fall migration begins',
    tasks: 'Maintain high feeder count; migrating birds passing through',
    intensity: 'high',
  },
  {
    month: 'September',
    activity: 'Peak fall migration',
    tasks: 'Most important month\u2014may see 25\u201340 birds at once; don\u2019t reduce feeders',
    intensity: 'peak',
  },
  {
    month: 'October',
    activity: 'Late migration',
    tasks: 'Keep feeders up through month; stragglers still passing; rare western species may appear',
    intensity: 'medium',
  },
  {
    month: 'November',
    activity: 'Post-migration',
    tasks: 'Reduce to 1\u20132 feeders; watch for winter Rufous and other rarities',
    intensity: 'low',
  },
  {
    month: 'December',
    activity: 'Winter',
    tasks: 'Maintain 1\u20132 feeders (especially coastal areas); rare visitors possible',
    intensity: 'low',
  },
];
