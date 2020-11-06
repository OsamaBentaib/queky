import React, { useEffect, useState } from "react";
import { FiLogOut, FiUsers } from "react-icons/fi";
import SpotifyWebApi from "spotify-web-api-js";
const s = new SpotifyWebApi();
interface Image {
  height?: Number | undefined;
  url: string;
  width?: Number | undefined;
}
interface eUrl {
  spotify?: string | undefined;
}
interface followers {
  href?: string | undefined | undefined;
  total?: Number | undefined | undefined;
}
interface User {
  display_name?: string | undefined;
  external_urls: eUrl;
  followers?: followers | undefined;
  href?: string | undefined;
  id?: string | undefined;
  images?: Image[] | undefined;
  type?: string | undefined;
  uri?: string | undefined;
}
export default function User() {
  const [user, setUser] = useState<User | null>(null);
  const _token = localStorage.getItem("token");
  console.log(_token);
  s.setAccessToken(_token);
  useEffect(() => {
    s.getMe()
      .then((response) => {
        console.log(response);
        const user: User = response;
        setUser(user);
      })
      .catch((err) => {
        if (err.status === 401) {
          onLogout();
        }
      });
  });
  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/";
  };
  if (user)
    return (
      <div className="row align-items-center p-3">
        <div className="col-auto">
          <a href={user.href} className="avatar ">
            <img
              src={user.images ? user.images[0].url : ""}
              alt="..."
              className="avatar-img rounded-circle rounded"
            />
          </a>
        </div>
        <div className="col ml-n2">
          <h4 className="mb-1">
            <a href={user.href}>{user?.display_name}</a>
          </h4>
          <small className="text-muted">
            <FiUsers /> {user.followers?.total} Followers
          </small>
        </div>
        <div className="col-auto">
          <button onClick={onLogout} className="btn btn-sm btn-outline-success">
            <FiLogOut size={"15"} /> Logout
          </button>
        </div>
      </div>
    );
  return (
    <div className="row align-items-center p-3">
      <div className="col-auto">
        <div className="avatar rounded-circle ___loading"></div>
      </div>
      <div className="col ml-n2">
        <h4 className="mb-1">
          <div
            className="___loading"
            style={{ width: "60px", height: "15px" }}
          ></div>
        </h4>
        <small className="text-muted">
          <div
            className="___loading"
            style={{ width: "40px", height: "15px" }}
          ></div>
        </small>
      </div>
      <div className="col-auto">
        <div
          className="___loading"
          style={{ width: "40px", height: "20px" }}
        ></div>
      </div>
    </div>
  );
}
