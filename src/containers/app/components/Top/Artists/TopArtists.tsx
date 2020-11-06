import React, { Fragment, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Artist from "./Artist";
import { Response, ArtistItem } from "./Interface";
import SingleArtist from "./SingleArtist/SingleArtist";
const s = new SpotifyWebApi();

export default function TopArtists() {
  const [response, setResponse] = useState<Response | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<null | ArtistItem>(null);
  const _token = localStorage.getItem("token");
  s.setAccessToken(_token);
  useEffect(() => {
    s.getMyTopArtists()
      .then((response) => {
        console.log(response);
        const res: Response | undefined = response;
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const onSelectArtist = (artistId: ArtistItem) => {
    setSelectedArtist(artistId);
  };
  const onCloseArtist = () => {
    setSelectedArtist(null);
  };
  return (
    <Fragment>
      {selectedArtist && (
        <SingleArtist onCloseArtist={onCloseArtist} artist={selectedArtist} />
      )}
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">Top Artists</h4>
        </div>
        <div className="card-body">
          <div className="list--artist ">
            {response?.items?.map((ArtistItem: ArtistItem, index: number) => (
              <Artist
                key={index}
                onSelectArtist={onSelectArtist}
                artist={ArtistItem}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
