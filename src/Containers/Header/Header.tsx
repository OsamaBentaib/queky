import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Brand } from "./../../assets/svg/PiStocklight.svg";
interface Props {
  type: string;
}
export default function Header(props: Props) {
  const { type } = props;
  return (
    <div className="navbar-container ">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary-3"
        style={{ top: "0px" }}
      >
        <div className="container">
          <Link className="navbar-brand fade-page" to="/">
            <Brand width="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="py-2 py-lg-0">
              <ul className="navbar-nav"></ul>
            </div>
            <Link
              to={type === "photos" ? "/videos/" : "/photos/"}
              className="btn btn-primary ml-lg-3"
            >
              {type === "photos" ? "Videos" : "Photos"}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
