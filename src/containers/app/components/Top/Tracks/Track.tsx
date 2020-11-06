import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setPlayingTrack } from "../../../../../store/setPreview";
import { Item } from "./Interface";
interface Props {
  item: Item;
}
export default function Track(props: Props) {
  const { item } = props;
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
    <div className="list--item--track">
      <span
        onMouseEnter={() =>
          setPlaying(
            item?.preview_url,
            item?.album?.images ? item.album.images[0].url : ""
          )
        }
        className="track pointer"
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
  );
}
