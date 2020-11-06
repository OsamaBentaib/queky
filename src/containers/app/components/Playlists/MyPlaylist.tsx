import React, { useEffect, useState } from "react";
import { Items, Response } from "./Interface";
import SpotifyWebApi from "spotify-web-api-js";
import { FiPlay } from "react-icons/fi";
const s = new SpotifyWebApi();

interface Props {
  onGetPlaylist: any;
}

export default function MyPlaylist(props: Props) {
  const [response, setResponse] = useState<Response | null>(null);
  const _token = localStorage.getItem("token");
  console.log(_token);
  s.setAccessToken(_token);
  useEffect(() => {
    s.getUserPlaylists()
      .then((response) => {
        console.log(JSON.stringify(response));
        const res: Response | null = response;
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">Your Playlists</h4>
      </div>
      <div className="card-body">
        <div className="list--playlists">
          <div className="list-group list-group-flush my-n3">
            {response &&
              response?.items?.map((item: Items, i: number) => (
                <div
                  key={i}
                  className="list-group-item pointer"
                  onClick={() => props.onGetPlaylist(item)}
                >
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="avatar pointer">
                        <img
                          src={item?.images ? item.images[0].url : ""}
                          alt="..."
                          className="avatar-img rounded"
                        />
                      </span>
                    </div>
                    <div className="col ml-n2">
                      <h4 className="mb-1">{item.name}</h4>
                      <small className="text-muted">
                        <FiPlay /> {item.tracks?.total} Tracks
                      </small>
                    </div>
                    <div className="col-auto"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
