import React, { useEffect, useRef } from "react";
import { Track, artists } from "./../Interface";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setPlayingTrack } from "../../../../../store/setPreview";
interface Props {
  track: Track;
}
const SingleTrack = (props: Props) => {
  const { track } = props;
  const childReference = useRef<null | HTMLDivElement>(null);
  const goToMe = () => {
    childReference?.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToMe();
  }, [props]);
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
    <div className="card" ref={childReference}>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <span
              onMouseEnter={() =>
                setPlaying(
                  track.preview_url,
                  track?.album?.images ? track.album.images[0].url : ""
                )
              }
              className="avatar avatar-lg pointer"
            >
              <img
                src={
                  track
                    ? track.album?.images
                      ? track.album.images[0].url
                      : ""
                    : ""
                }
                alt="..."
                className="avatar-img rounded"
              />
            </span>
          </div>
          <div className="col ml-n2">
            <h3 className="mb-1">{track.name}</h3>
            <small className="text-muted">
              By{" "}
              {track &&
                track.artists?.map((artist: artists, i: number) => (
                  <span className="text-sm">{artist.name},</span>
                ))}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleTrack;
