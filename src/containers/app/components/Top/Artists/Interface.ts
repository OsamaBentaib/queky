export interface Followers {
  href: string | null;
  total: Number | undefined;
}

export interface Image {
  height?: Number | undefined;
  url: string | undefined;
  width?: Number | undefined;
}
export interface Eurl {
  spotify: string | null;
}
export interface ArtistItem {
  external_urls: Eurl;
  followers: Followers;
  genres: string[];
  href: string | null;
  id: string;
  images: Image[] | [];
  name: string | null;
  popularity: number | undefined;
  type: string | null;
  uri: string | null;
}
export interface Response {
  items: ArtistItem[] | null;
  total?: number | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  previous?: string | null | number;
  href?: string | null;
  next?: string | null;
}
