import type { ImageMetadata } from 'astro';
import rubyMale from '../images/species/ruby-throated-male.jpg';
import rubyFemale from '../images/species/ruby-throated-female.jpg';
import rufousMale from '../images/species/rufous-male.jpg';
import blackChinnedMale from '../images/species/black-chinned-male.jpg';
import blackChinnedFemale from '../images/species/black-chinned-female.jpg';
import calliopeMale from '../images/species/calliope-male.jpg';
import calliopeFemale from '../images/species/calliope-female.jpg';

export interface SpeciesPhoto {
  id: string;
  speciesName: string;
  sex: 'male' | 'female';
  creditLabel: string;
  alt: string;
  src: ImageMetadata;
  author: string;
  authorUrl?: string;
  licenseName: string;
  licenseUrl: string;
  commonsUrl: string;
  /** CC BY-SA files are resized for the web and must say so. */
  resized: boolean;
  caveat?: string;
  /** Lead image, likely in the first viewport. Everything else is lazy-loaded. */
  priority?: boolean;
}

export const rufousFemaleNote =
  "Females aren't pictured because female Rufous and Allen's often can't be told apart in photos.";

const ccBySa4 = {
  licenseName: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  resized: true,
} as const;

export const speciesPhotos: SpeciesPhoto[] = [
  {
    id: 'ruby-throated-male',
    speciesName: 'Ruby-throated Hummingbird',
    sex: 'male',
    creditLabel: 'Adult male Ruby-throated Hummingbird',
    alt: 'Adult male Ruby-throated Hummingbird showing a ruby-red gorget, emerald-green crown, and whitish chest',
    src: rubyMale,
    author: 'Paul Danese',
    ...ccBySa4,
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:20240707_ruby_throated_hummingbird_bafflin_sanctuary_PD204642_02.jpg',
    priority: true,
  },
  {
    id: 'ruby-throated-female',
    speciesName: 'Ruby-throated Hummingbird',
    sex: 'female',
    creditLabel: 'Adult female Ruby-throated Hummingbird',
    alt: 'Adult female Ruby-throated Hummingbird showing a pale throat with faint streaking, a green back, and buffy flanks',
    src: rubyFemale,
    author: 'Courtney Celley/USFWS',
    licenseName: 'Public domain',
    licenseUrl: 'https://commons.wikimedia.org/wiki/Template:PD-USGov-Interior-FWS',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Ruby-throated_hummingbird_(53753091374).jpg',
    resized: false,
  },
  {
    id: 'rufous-male',
    speciesName: 'Rufous Hummingbird',
    sex: 'male',
    creditLabel: 'Adult male Rufous Hummingbird',
    alt: 'Adult male Rufous Hummingbird showing an all-rufous back and an orange-red gorget',
    src: rufousMale,
    author: 'VJAnderson',
    ...ccBySa4,
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Rufous_Hummingbird,_male_01.jpg',
  },
  {
    id: 'black-chinned-male',
    speciesName: 'Black-chinned Hummingbird',
    sex: 'male',
    creditLabel: 'Adult male Black-chinned Hummingbird',
    alt: 'Adult male Black-chinned Hummingbird showing a black throat with a purple band',
    src: blackChinnedMale,
    author: 'Vickie J Anderson',
    authorUrl: 'http://www.wildlifeimagesupclose.com',
    ...ccBySa4,
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Black-chinned_Hummingbird_5563m.jpg',
  },
  {
    id: 'black-chinned-female',
    speciesName: 'Black-chinned Hummingbird',
    sex: 'female',
    creditLabel: 'Female Black-chinned Hummingbird',
    alt: 'Female Black-chinned Hummingbird showing a pale unmarked throat and a long dark bill',
    src: blackChinnedFemale,
    author: 'Vickie J Anderson',
    authorUrl: 'http://www.wildlifeimagesupclose.com',
    ...ccBySa4,
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Black-chinned_Hummingbird_5276.jpg',
    caveat:
      'Female Black-chinned and Ruby-throated are nearly identical; this ID is based on location (Arizona, July), not plumage alone.',
  },
  {
    id: 'calliope-male',
    speciesName: 'Calliope Hummingbird',
    sex: 'male',
    creditLabel: 'Adult male Calliope Hummingbird',
    alt: 'Adult male Calliope Hummingbird showing magenta throat streaks rather than a solid gorget',
    src: calliopeMale,
    author: 'Dan Pancamo',
    licenseName: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Calliope_Hummingbird_by_Dan_Pancamo.jpg',
    resized: true,
  },
  {
    id: 'calliope-female',
    speciesName: 'Calliope Hummingbird',
    sex: 'female',
    creditLabel: 'Female or immature Calliope Hummingbird',
    alt: 'Female or immature Calliope Hummingbird showing a short bill, faint throat streaking, and a modest rusty wash on the flanks',
    src: calliopeFemale,
    author: 'Vickie J Anderson',
    ...ccBySa4,
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Calliope_Hummingbird_m.jpg',
  },
];

export function photoFor(speciesName: string, sex: 'male' | 'female'): SpeciesPhoto | undefined {
  return speciesPhotos.find((photo) => photo.speciesName === speciesName && photo.sex === sex);
}
