import * as actionTypes from "./actionTypes";
const initialState: PreviewState = {
  preview: undefined,
};
const reducer = (
  state: PreviewState = initialState,
  action: PreviewAction
): PreviewState => {
  switch (action.type) {
    case actionTypes.SET_PREVIEW:
      const newPreview: Preview = {
        poster: action.preview.poster,
        url: action.preview.url,
      };
      return {
        ...state,
        preview: newPreview,
      };
    default:
      return { ...state, preview: undefined };
  }
};

export default reducer;
