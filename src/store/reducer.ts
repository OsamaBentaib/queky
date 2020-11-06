import { GET_EXPLORE_PHOTOS, GET_EXPLORE_VIDEOS, LOADING } from "./actionTypes";
const initialState: initState = {
  photos: [],
  videos: [],
  loading: false,
};
const reducer = (state: initState = initialState, action: any): initState => {
  switch (action.type) {
    case LOADING:
      const loading: boolean = action.loading;
      return {
        ...state,
        loading: loading,
      };
    case GET_EXPLORE_PHOTOS:
      const oldPhotos = state.photos;
      const photos: IPhoto[] | undefined = oldPhotos?.concat(action.photos);
      return {
        ...state,
        photos: photos,
      };
    case GET_EXPLORE_VIDEOS:
      const oldVideos = state.videos;
      const videos: IVideo[] | undefined = oldVideos?.concat(action.videos);
      return {
        ...state,
        videos: videos,
      };
    default:
      return { ...state };
  }
};

export default reducer;
