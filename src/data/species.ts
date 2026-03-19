export interface SpeciesFeature {
  feature: string;
  description: string;
}

export interface Species {
  name: string;
  scientificName: string;
  status: string;
  whenToExpect?: string;
  likelihood?: string;
  features: {
    male?: SpeciesFeature[];
    female?: SpeciesFeature[];
    juvenile?: SpeciesFeature[];
    general?: SpeciesFeature[];
  };
  keyDifference?: string;
  isPrimary: boolean;
}

export const species: Species[] = [
  {
    name: 'Ruby-throated Hummingbird',
    scientificName: 'Archilochus colubris',
    status: 'The only breeding hummingbird in eastern North America. If you see a hummingbird in the Southeast from March\u2013October, it is almost certainly a Ruby-throat.',
    isPrimary: true,
    features: {
      male: [
        { feature: 'Throat (Gorget)', description: 'Brilliant iridescent ruby-red; appears black in poor light, then "lights up" when sun hits at correct angle' },
        { feature: 'Crown', description: 'Emerald green' },
        { feature: 'Back', description: 'Metallic green' },
        { feature: 'Underparts', description: 'Dusky gray-white on chest, grayish flanks' },
        { feature: 'Tail', description: 'Forked, black' },
        { feature: 'Bill', description: 'Black, straight, medium-length' },
        { feature: 'Size', description: '2.8\u20133.5 inches (7\u20139 cm); Weight: 0.1\u20130.2 oz (2\u20136 g)' },
      ],
      female: [
        { feature: 'Throat', description: 'White or pale gray, sometimes with faint streaking; NO red' },
        { feature: 'Crown', description: 'Green, duller than male' },
        { feature: 'Back', description: 'Metallic golden-green' },
        { feature: 'Underparts', description: 'White below with buffy/tan flanks' },
        { feature: 'Tail', description: 'Rounded (not forked), black with white tips on outer feathers' },
        { feature: 'Bill', description: 'Black, straight' },
      ],
      juvenile: [
        { feature: 'General Appearance', description: 'Resembles adult female' },
        { feature: 'Throat', description: 'May have faint dark streaking; juvenile males may show scattered red feathers by late summer' },
        { feature: 'Tail', description: 'Similar to female with white-tipped outer feathers' },
        { feature: 'Bill', description: 'Slightly shorter than adults' },
      ],
    },
    keyDifference: 'Males have iridescent red throat, forked tail. Females have no red, rounded tail with white tips, overall duller coloring.',
  },
  {
    name: 'Rufous Hummingbird',
    scientificName: 'Selasphorus rufus',
    status: 'Most common winter vagrant in Southeast (November\u2013March)',
    whenToExpect: 'October\u2013March',
    likelihood: 'Uncommon but regular; most frequently reported winter hummingbird in GA, FL, SC, AL',
    isPrimary: false,
    features: {
      male: [
        { feature: 'Overall Color', description: 'Bright orange-rufous' },
        { feature: 'Throat', description: 'Brilliant orange-red' },
        { feature: 'Tail', description: 'Rufous with dark tips' },
      ],
      female: [
        { feature: 'Overall Color', description: 'Green above, rufous flanks' },
        { feature: 'Throat', description: 'Spotted, may have orange center' },
        { feature: 'Tail', description: 'Rufous base, green/rufous mix' },
      ],
    },
  },
  {
    name: 'Black-chinned Hummingbird',
    scientificName: 'Archilochus alexandri',
    status: 'Rare winter visitor',
    isPrimary: false,
    features: {
      male: [
        { feature: 'Throat', description: 'Black with purple band at bottom' },
        { feature: 'Overall', description: 'Very similar to Ruby-throat' },
      ],
      female: [
        { feature: 'Throat', description: 'Plain whitish' },
        { feature: 'Overall', description: 'Nearly identical to female Ruby-throat' },
      ],
    },
    keyDifference: 'Males have black (not red) throat with purple base. Females nearly impossible to distinguish from Ruby-throat without careful examination.',
  },
  {
    name: 'Calliope Hummingbird',
    scientificName: 'Selasphorus calliope',
    status: 'Rare vagrant (1\u20132 reported per winter in Georgia)',
    isPrimary: false,
    features: {
      male: [
        { feature: 'Size', description: 'Smallest bird in North America!' },
        { feature: 'Throat', description: 'Magenta streaks (not solid patch)' },
        { feature: 'Tail', description: 'Short, does not extend past wings when perched' },
      ],
      female: [
        { feature: 'Size', description: 'Smallest bird in North America!' },
        { feature: 'Throat', description: 'Faint streaking' },
        { feature: 'Tail', description: 'Short, does not extend past wings when perched' },
      ],
    },
  },
];
