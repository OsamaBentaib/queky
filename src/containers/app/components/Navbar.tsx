import React from "react";
import { ReactComponent as Brand } from "./../../../assets/svg/Queky.svg";
import PlayingNow from "./Player/PlayingNow";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const preview: Preview | undefined = useSelector(
    (state: PreviewState) => state.preview
  );
  return (
    <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <a className="navbar-brand" href="./index.html">
          <Brand width="80" />
        </a>
        <div className="navbar-user d-md-none"></div>
        <div className="PlayingNow">
          <div className="mt-auto"></div>
          <div
            className="navbar-user d-none d-md-flex"
            style={{ padding: "0px" }}
          >
            <PlayingNow preview={preview} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
