export interface AllShowsResults {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres?: (string | null)[] | null;
    status: string;
    runtime?: number | null;
    averageRuntime: number;
    premiered: string;
    ended?: string | null;
    officialSite?: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network?: Network | null;
    webChannel?: WebChannel | null;
    dvdCountry?: CountryOrDvdCountry | null;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
  }
  export interface Schedule {
    time: string;
    days?: (string | null)[] | null;
  }
  export interface Rating {
    average?: number | null;
  }
  export interface Network {
    id: number;
    name: string;
    country: CountryOrDvdCountry1;
    officialSite?: string | null;
  }
  export interface CountryOrDvdCountry1 {
    name: string;
    code: string;
    timezone: string;
  }
  export interface WebChannel {
    id: number;
    name: string;
    country?: CountryOrDvdCountry2 | null;
    officialSite?: string | null;
  }
  export interface CountryOrDvdCountry2 {
    name: string;
    code: string;
    timezone: string;
  }
  export interface CountryOrDvdCountry {
    name: string;
    code: string;
    timezone: string;
  }
  export interface Externals {
    tvrage: number;
    thetvdb?: number | null;
    imdb?: string | null;
  }
  export interface Image {
    medium: string;
    original: string;
  }
  export interface Links {
    self: Self;
    previousepisode: PreviousepisodeOrNextepisode;
    nextepisode?: PreviousepisodeOrNextepisode1 | null;
  }
  export interface Self {
    href: string;
  }
  export interface PreviousepisodeOrNextepisode {
    href: string;
    name: string;
  }
  export interface PreviousepisodeOrNextepisode1 {
    href: string;
    name: string;
  }
  