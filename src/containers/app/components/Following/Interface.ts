export interface Eurl {
  spotify?: string | null;
}
export interface followers {
  href?: string;
  total?: number;
}
export interface Image {
  height?: number;
  url?: string;
  width?: number;
}
export interface cursors {
  after?: string;
}
export interface Items {
  external_urls?: Eurl;
  followers?: followers;
  genres?: string[];
  href?: string;
  id?: string;
  images?: Image[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
}
export interface artists {
  items?: Items[];
  next?: string;
  total?: number;
  cursors?: cursors;
  limit?: number;
  href?: string;
}
export interface Response {
  artists?: artists;
}
