import React, { Fragment, useEffect, useRef, useState } from "react";
import { Data, Response, Track } from "./Interface";
import { Items } from "./../Playlists/Interface";
import SpotifyWebApi from "spotify-web-api-js";
import { FiPlay, FiX } from "react-icons/fi";
import { Dispatch } from "redux";
import SingleTrack from "./SingleTrack/SingleTrack";
import { useDispatch } from "react-redux";
import { setPlayingTrack } from "../../../../store/setPreview";
const s = new SpotifyWebApi();
interface Props {
  playlist: Items;
  onClosePlaylist: any;
}
export default function SinglePlaylist(props: Props) {
  const [response, setResponse] = useState<Response | null>(null);
  const [track, setTrack] = useState<Track | undefined>(undefined);
  const _token = localStorage.getItem("token");
  s.setAccessToken(_token);
  const goToTop = useRef<null | HTMLDivElement>(null);
  const goToMe = () => {
    goToTop?.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToMe();
    s.getPlaylistTracks(props.playlist.id)
      .then((response) => {
        console.log(JSON.stringify(response));
        const res: Response | null = response;
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  const onSetTrack = (track?: Track) => {
    setTrack(track);
  };
  const dispatch: Dispatch<any> = useDispatch();
  const setPlaying = (url: string | undefined, poster: string | undefined) => {
    console.log(url);
    const preview: Preview = {
      url: url,
      poster: poster,
    };
    dispatch(setPlayingTrack(preview));
  };
  return (
    <Fragment>
      {track !== undefined && <SingleTrack track={track} />}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center" ref={goToTop}>
            <div className="col-auto">
              <span className="avatar avatar-lg">
                <img
                  src={
                    props.playlist.images ? props.playlist.images[0].url : ""
                  }
                  alt="..."
                  className="avatar-img avatar-lg rounded"
                />
              </span>
            </div>
            <div className="col ml-n2">
              <h4 className="mb-1">
                <a href="team-overview.html">{props.playlist.name}</a>
              </h4>
              <p className="small text-muted mb-1">
                {props.playlist.description}
              </p>
              <small className="text-muted">
                <FiPlay /> {props.playlist.tracks?.total} Tracks
              </small>
            </div>
            <div className="col-auto">
              <button onClick={props.onClosePlaylist} className="btn">
                {" "}
                <FiX />
              </button>
            </div>
          </div>
          <div className="mt-4 w-100">
            <div className="list--track">
              {response &&
                response?.items?.map((data: Data, i: number) => (
                  <div
                    onClick={() => onSetTrack(data.track)}
                    onMouseEnter={() =>
                      setPlaying(
                        data?.track?.preview_url,
                        data.track?.album?.images
                          ? data.track.album.images[0].url
                          : ""
                      )
                    }
                    key={i}
                    className={`list--item--track pointer ${
                      data?.track?.preview_url ? "" : "--disabled"
                    }`}
                  >
                    <span className="track">
                      <img
                        src={
                          data?.track?.album?.images
                            ? data?.track?.album?.images[1].url
                            : ""
                        }
                        alt="..."
                        className="poster"
                      />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
