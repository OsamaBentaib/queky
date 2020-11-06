// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "70cd1dbbc9244330b99c5eab07d73833";
const redirectUri = "http://queky.beosama.com/callback/";
const scopes = [
  "user-top-read",
  "user-library-read",
  "user-modify-playback-state",
  "user-follow-read",
];
interface Url {
  url: String;
}
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
