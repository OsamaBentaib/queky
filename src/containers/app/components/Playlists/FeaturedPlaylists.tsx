import React, { Fragment, useEffect, useState } from "react";
import { Items, Response } from "./Interface";
import SpotifyWebApi from "spotify-web-api-js";
import SinglePlaylist from "../SinglePlaylist/SinglePlaylist";
const s = new SpotifyWebApi();
export default function FeaturedPlaylists() {
  const [response, setResponse] = useState<Response | null>(null);
  const [playlist, setPlaylist] = useState<Items | null>(null);
  const _token = localStorage.getItem("token");
  s.setAccessToken(_token);
  useEffect(() => {
    s.getFeaturedPlaylists()
      .then((response) => {
        console.log(JSON.stringify(response));
        const res: Response | null = response.playlists;
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const onhandelViewPlaylist = (items: Items) => {
    setPlaylist(items);
  };
  const onClosePlaylist = () => {
    setPlaylist(null);
  };
  return (
    <Fragment>
      {playlist && (
        <SinglePlaylist onClosePlaylist={onClosePlaylist} playlist={playlist} />
      )}
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">For you</h4>
        </div>
        <div className="card-body">
          <div className="list--track">
            {response &&
              response?.items?.map((item: Items, i: number) => (
                <div className="list--item--track">
                  <span
                    onClick={() => onhandelViewPlaylist(item)}
                    className="track"
                  >
                    <img
                      src={item?.images ? item.images[0].url : ""}
                      alt="..."
                      className="poster"
                    />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
