import React from "react";
import { Route } from "react-router-dom";
import Layout from "./../containers/Layout";
import Auth from "./../containers/auth/Auth";
import Callback from "../containers/auth/Callback";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Layout} />
    <Route exact path="/auth/" component={Auth} />
    <Route path="/callback/" component={Callback} />
  </div>
);

export default BaseRouter;
