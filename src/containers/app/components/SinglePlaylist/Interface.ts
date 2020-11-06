interface Eids {
  isrc?: string;
}
interface Eurl {
  spotify?: string;
}
export interface addedBy {
  external_urls?: Eurl;
  href?: string;
  id?: string;
  type?: string;
  uri?: string;
}
export interface artists {
  external_urls?: Eurl;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
}
export interface Image {
  height?: number;
  url?: string | undefined;
  width?: number;
}
export interface album {
  album_type?: string;
  artists?: artists[];
  available_markets?: string[];
  external_urls?: Eurl;
  href?: string;
  id?: string;
  images?: Image[];
  name?: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  type?: string;
  uri?: string;
}
export interface artists {
  external_urls?: Eurl;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
}
export interface Track {
  album?: album;
  artists?: artists[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  episode?: boolean;
  explicit?: boolean;
  external_ids?: Eids;
  external_urls?: Eurl;
  href?: string;
  id?: string;
  is_local?: boolean;
  name?: string;
  popularity?: number;
  preview_url?: string;
  track?: boolean;
  track_number?: number;
  type?: string;
  uri?: string;
}
interface vth {
  url?: null;
}
export interface Data {
  added_at?: string;
  added_by?: addedBy;
  is_local?: boolean;
  primary_color?: string;
  track?: Track;
  video_thumbnail?: vth;
}
export interface Response {
  href?: string;
  items?: Data[];
  limit?: number;
  next?: string;
  offset?: number;
  previous?: string;
  total?: number;
}
