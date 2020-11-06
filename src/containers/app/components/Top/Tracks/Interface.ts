export interface Eurl {
  spotify: string | null;
}
export interface Artist {
  external_urls: Eurl;
  href: string | null;
  id: string | null;
  name: string | null;
  type: string | null;
  uri: string | null;
}
export interface Image {
  height?: number | null;
  url: string | undefined;
  width?: number | null;
}
export interface Eids {
  isrc?: string | undefined;
}
export interface Album {
  album_type?: string | null;
  artists?: Artist[];
  available_markets?: string[] | undefined;
  external_urls?: Eurl;
  href?: string | null;
  id?: string | null;
  images?: Image[] | [];
  name?: string | null;
  release_date?: string | null;
  release_date_precision?: string | null;
  total_tracks?: number | undefined;
  type?: string | undefined;
  uri?: string | undefined;
}
export interface Item {
  album: Album;
  artists: Artist[] | [];
  available_markets?: string[] | undefined;
  disc_number: number;
  duration_ms: number;
  explicit: boolean | undefined;
  external_ids: Eids;
  external_urls: Eurl;
  href: string | undefined;
  id: string | undefined;
  name: string | undefined;
  popularity?: number | undefined;
  preview_url?: string;
  track_number: number | undefined;
  type: string | undefined;
  uri: string | undefined;
}
export interface Response {
  items: Item[];
  total: number | undefined;
  limit: number | undefined;
  offset: number | undefined;
  previous: string | undefined;
  href: string | undefined;
  next: string | undefined;
}
