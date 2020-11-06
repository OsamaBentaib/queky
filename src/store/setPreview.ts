import { SET_PREVIEW } from "./actionTypes";

export const setPlayingTrack = (preview: Preview) => ({
  type: SET_PREVIEW,
  preview: preview,
});
