import * as React from "react";
import { Items, Response } from "./Interface";
import SpotifyWebApi from "spotify-web-api-js";
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
const s = new SpotifyWebApi();

interface Props {
  onGetArtist: any;
}
export default function Following(props: Props) {
  const [response, setResponse] = useState<Response | null>(null);
  const _token = localStorage.getItem("token");
  console.log(_token);
  s.setAccessToken(_token);
  useEffect(() => {
    s.getFollowedArtists()
      .then((response: Response | null) => {
        console.log(response);
        setResponse(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="card border-top">
      <div className="card-header">
        <h4 className="card-header-title">Following</h4>
      </div>
      <div className="card-body">
        <div className="list-group list-group-flush my-n3">
          {response &&
            response?.artists?.items?.map((item: Items, i: number) => (
              <div
                onClick={() => props.onGetArtist(item)}
                className="list-group-item pointer"
              >
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="avatar">
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
                      <FiUsers /> {item.followers?.total} Followers
                    </small>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
