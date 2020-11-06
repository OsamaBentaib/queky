import React, { useEffect, useState } from "react";
import { Response, Item } from "./Interface";
import SpotifyWebApi from "spotify-web-api-js";
import Track from "./Track";
const s = new SpotifyWebApi();
export default function TopTracks() {
  const [response, setResponse] = useState<Response | null>(null);
  const _token = localStorage.getItem("token");
  console.log(_token);
  s.setAccessToken(_token);
  useEffect(() => {
    s.getMyTopTracks()
      .then((response) => {
        console.log(response);
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
        <h4 className="card-header-title">Top Tracks</h4>
      </div>
      <div className="card-body">
        <div className="list--track">
          {response?.items?.map((item: Item, index: number) => (
            <Track key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
