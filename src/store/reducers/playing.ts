
const initialState = {
    playingTrack: null
};
interface action{
  type: string,
  url?: string
}
const reducer = (state = initialState, action:action) => {
  switch (action.type) {
    case "SET_PLAYING_TRACK":
      return {...state, playingTrack: action.url};
    default:
      return state;
  }
};

export default reducer;
