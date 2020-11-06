import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Tops from "./Tops";
import FeaturedPlaylists from "./components/Playlists/FeaturedPlaylists";
import { ArtistItem } from "./components/Top/Artists/Interface";
import { Items as Playlist } from "./components/Playlists/Interface";
import SingleArtist from "./components/Top/Artists/SingleArtist/SingleArtist";
import SinglePlaylist from "./components/SinglePlaylist/SinglePlaylist";
interface Props {
  isPlaylist: boolean;
}
export default function MainContent() {
  const [navbarArtist, setNavbarArtist] = useState<ArtistItem | null>(null);
  const [navbarPlaylist, setNavbarPlaylist] = useState<Playlist | null>();
  const onGetArtist = (artist: ArtistItem) => {
    setNavbarArtist(artist);
  };
  const onGetPlaylist = (playlist: Playlist) => {
    setNavbarPlaylist(playlist);
  };
  const onCloseArtist = () => {
    setNavbarArtist(null);
  };
  const onClosePlaylist = () => {
    setNavbarPlaylist(null);
  };
  return (
    <main>
      <Navbar />
      <div className="main-content">
        <div className="container-fluid">
          <div className="row mt-4 mt-md-5">
            <div className="col-12 col-xl-8">
              {navbarArtist && (
                <SingleArtist
                  onCloseArtist={onCloseArtist}
                  artist={navbarArtist}
                />
              )}
              {navbarPlaylist && (
                <SinglePlaylist
                  onClosePlaylist={onClosePlaylist}
                  playlist={navbarPlaylist}
                />
              )}
              <FeaturedPlaylists />
              <Tops />
            </div>
            <div className="col-12 col-xl-4">
              <Navigation
                onGetArtist={onGetArtist}
                onGetPlaylist={onGetPlaylist}
                // onCloseArtist={onCloseArtist}
                // onClosePlaylist={onClosePlaylist}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
