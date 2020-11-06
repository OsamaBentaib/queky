import * as React from "react";
import { Redirect } from "react-router-dom";
import MainContent from "./app/MainContent";
export default function Layout() {
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to="/auth/" />;
  return <MainContent />;
}
