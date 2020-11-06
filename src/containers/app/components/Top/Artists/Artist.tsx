import React from "react";
import { ArtistItem } from "./Interface";
interface Props {
  artist: ArtistItem;
  onSelectArtist: any;
}
export default function Artist(props: Props) {
  const { artist, onSelectArtist } = props;
  return (
    <div className="list--item--artist">
      <span
        onClick={() => onSelectArtist(artist)}
        className="avatar artist avatar-lg mb-3 hover"
      >
        <img
          src={artist.images[0].url}
          alt="..."
          className="avatar-img rounded-circle"
        />
      </span>
    </div>
  );
}
