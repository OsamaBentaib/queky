export interface Followers {
  href?: string;
  total?: number;
}

export interface Image {
  height?: number;
  url?: string;
  width?: number;
}
export interface Eurl {
  spotify?: string;
}
export interface ArtistItem {
  external_urls?: Eurl;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
}
export interface album {
  album_type?: string;
  artists?: ArtistItem[];
  external_urls?: Eurl;
  href?: string;
  id?: string;
  images?: Image[];
  name?: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: 14;
  type?: string;
  uri?: string;
}
interface Eids {
  isrc?: string;
}
export interface tracks {
  album?: album;
  artists?: ArtistItem[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: Eids;
  external_urls?: Eurl;
  href?: string;
  id?: string;
  is_local?: boolean;
  is_playable?: boolean;
  name?: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
}
export interface TopTracksResponse {
  tracks?: tracks[];
}
