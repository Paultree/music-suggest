export interface Parameter {
  method: string;
  headers: object;
  body?: string;
}

export interface Spotify {
  album: any;
  artists: any[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  external_urls: any;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Song {
  id: string;
  trackName: string;
  preview: string;
  duration: number;
  artists: string;
  link: string;
  albumName: string;
  albumLink: string;
  releaseDate: string;
  previewImg: string;
}

export interface SongCardProps {
  data: Song | any;
  isLoading: boolean;
  isRefetching: boolean;
  error: any;
  isError: boolean;
}
