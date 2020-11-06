import React from "react";
import Following from "./Following/Following";
import MyPlaylist from "./Playlists/MyPlaylist";
import User from "./User/User";
interface Props {
  onGetArtist: any;
  onGetPlaylist: any;
}
export default function Navigation(props: Props) {
  return (
    <div className="card">
      <User />
      <MyPlaylist onGetPlaylist={props.onGetPlaylist} />
      <Following onGetArtist={props.onGetArtist} />
    </div>
  );
}
