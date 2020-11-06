import React from "react";
import FooterContainer from "../FooterContainer/FooterContainer";
import BaseRouter from "./../../routes/routes";

export default function MainContainer() {
  return (
    <div className="main" role="main">
      <BaseRouter />
      <FooterContainer />
    </div>
  );
}
