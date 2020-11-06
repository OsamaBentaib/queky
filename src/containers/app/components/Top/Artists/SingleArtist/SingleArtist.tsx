import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { Dispatch } from "redux";
import { TopTracksResponse, tracks } from "./Interface";
import { setPlayingTrack } from "../../../../../../store/setPreview";
import { ArtistItem } from "./../Interface";
import { FiUsers, FiX } from "react-icons/fi";
const s = new SpotifyWebApi();
interface Props {
  artist: ArtistItem;
  onCloseArtist?: any;
}
export default function SingleArtist(props: Props) {
  const [
    topTracksResponse,
    setTopTracksResponse,
  ] = useState<TopTracksResponse | null>(null);
  const _token = localStorage.getItem("token");
  s.setAccessToken(_token);
  const childReference = useRef<null | HTMLDivElement>(null);
  const goToMe = () => {
    childReference?.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToMe();
    s.getArtistTopTracks(props.artist.id, "US")
      .then((response) => {
        console.log(JSON.stringify(response));
        const res: TopTracksResponse | undefined = response;
        setTopTracksResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  const dispatch: Dispatch<any> = useDispatch();
  const setPlaying = (url: string | undefined, poster: string | undefined) => {
    const preview: Preview = {
      url: url,
      poster: poster,
    };
    dispatch(setPlayingTrack(preview));
  };
  const { artist } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <span className="avatar avatar-lg">
              <img
                src={artist.images[0].url}
                alt="..."
                className="avatar-img rounded"
              />
            </span>
          </div>
          <div className="col ml-n2">
            <h4 className="mb-1">
              <a href="team-overview.html">{artist.name}</a>
            </h4>
            <p className="small text-muted mb-1">{artist.genres}</p>
            <small className="text-muted">
              <FiUsers /> {artist.followers.total} Followers
            </small>
          </div>
          <div
            className="col-auto pointer"
            onClick={() => {
              props.onCloseArtist();
            }}
          >
            <FiX />
          </div>
        </div>
        <div className="list--track mt-3">
          {topTracksResponse?.tracks?.map((item: tracks, index: number) => (
            <div className="list--item--track">
              <span
                onMouseEnter={() =>
                  setPlaying(
                    item?.preview_url,
                    item?.album?.images ? item.album.images[0].url : ""
                  )
                }
                className={`track pointer ${
                  item?.preview_url ? "" : "--disabled"
                }`}
              >
                <img
                  src={
                    item.album
                      ? item.album.images
                        ? item.album.images[0].url
                        : ""
                      : ""
                  }
                  alt="..."
                  className="poster"
                />
              </span>
            </div>
          ))}
          <div ref={childReference}></div>
        </div>
      </div>
    </div>
  );
}
