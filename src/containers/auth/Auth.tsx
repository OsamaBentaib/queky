import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { accessUrl } from "../../config/spotify";
import { ReactComponent as Brand } from "./../../assets/svg/Queky.svg";
export default function Login() {
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    if (window.location.search)
      setErr(window.location.search.split("?error=")[1]);
  }, [setErr]);
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-5 col-lg-6 text-center col-xl-4 px-lg-6 my-5">
            <h1 className="display-4 mb-3">Sign in {err && "faild 😭"}</h1>
            <p className="text-muted text-center mb-5">
              {err ? "Sorry you can't access" : "Sign in using spotify."}
            </p>
            <a href={accessUrl} className="btn btn-lg spotify-btn">
              <span className="ml-3 mr-3">
                <SiSpotify size={"35"} color="#fff" />{" "}
                <span className="ml-3 mb-n3">LOGIN TO SPOTIFY</span>
              </span>
            </a>
          </div>
          <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
            <div className="bg-cover bk-- vh-100 mt-n1 mr-n3">
              <div className="align-item-center text-center init"></div>
              <div className="brand align-items-center justify-content-center">
                <Brand width="400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
