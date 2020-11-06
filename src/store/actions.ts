import { GET_EXPLORE_PHOTOS, GET_EXPLORE_VIDEOS, LOADING } from "./actionTypes";

export const getPhotosSuccess = (photos: IPhoto[]) => ({
  type: GET_EXPLORE_PHOTOS,
  photos: photos,
});
export const getPhotosStart = (loading: Boolean) => ({
  type: LOADING,
  loading: loading,
});
export const getVideosSuccess = (videos: IVideo[]) => ({
  type: GET_EXPLORE_VIDEOS,
  videos: videos,
});
export const getVideosStart = (loading: Boolean) => ({
  type: LOADING,
  loading: loading,
});
