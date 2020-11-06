export interface Eurl {
  spotify?: string | null;
}
export interface Image {
  height?: number;
  url?: string | undefined;
  width?: number;
}
export interface Owner {
  display_name?: string | null;
  external_urls?: Eurl;
  href?: string | null;
  id?: string | null;
  type?: string | null;
  uri?: string | null;
}
export interface tracks {
  href?: string | null;
  total?: number;
}
export interface Items {
  collaborative: boolean;
  description?: string | null;
  external_urls?: Eurl;
  href?: string | null;
  id: string;
  images?: Image[];
  name?: string | null;
  owner?: Owner;
  primary_color?: null;
  public?: boolean;
  snapshot_id?: string | null;
  tracks: tracks;
  type?: string | null;
  uri?: string | null;
}
export interface Response {
  href?: string | null;
  items?: Items[];
  limit?: number;
  next?: string | null;
  offset?: number;
  previous?: string | null;
  total?: number;
}
