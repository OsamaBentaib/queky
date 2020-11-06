import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./Containers/MainContainer/MainContainer";

export default function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}
