import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import PhotosContainer from "../Containers/PhotosContainer/PhotosContainer";
import VideosContainer from "../Containers/VideoContainer/VideosContainer";

const BaseRouter = () => (
  <Fragment>
    <Route exact path="/photos/">
      <PhotosContainer page="explore" />
    </Route>
    <Route exact path="/">
      <Redirect to="/photos/" />
    </Route>
    <Route exact path="/photos/search/">
      <PhotosContainer page="search" />
    </Route>
    <Route exact path="/videos/search/">
      <VideosContainer page="search" />
    </Route>
    <Route exact path="/videos/">
      <VideosContainer page="explore" />
    </Route>
  </Fragment>
);

export default BaseRouter;
