import React from "react";
import { Redirect } from "react-router-dom";

export default function Callback() {
  if (window.location.hash) {
    const _token: string = window.location.hash
      .split("access_token=")[1]
      .split("&")[0];
    console.log(_token);
    if (_token) {
      localStorage.setItem("token", _token);
      return <Redirect to="/" />;
    }
  }
  return <Redirect to={`/auth/${window.location.search}`} />;
}
