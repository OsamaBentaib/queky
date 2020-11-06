interface Photosrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
interface IPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  src: Photosrc;
}

interface Videosrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
interface user {
    id: number;
    name: string;
    url: string;
}
interface VideoFiles {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  link: string;
}
interface VideoPictures {
  id: number;
  picture: string;
  nr: 0;
}
interface IVideo {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: user;
  video_files: VideoFiles[];
  video_pictures: VideoPictures[];
}

type initState = {
  photos?: IPhoto[] | undefined;
  videos?: IVideo[] | undefined;
  loading: boolean;
};

type Actions = {
  type: string;
  photos: IPhoto[];
  videos: IVideo[];
};

type DispatchType = (args: Actions) => Actions;
