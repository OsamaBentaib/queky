import React, { Fragment } from "react";
import Header from "../Header/Header";
import SectionContainer from "../SectionContainer/SectionContainer";
import ExploreContainer from "./ExploreContainer/ExploreContainer";
import SearchContainer from "./SearchContainer/SearchContainer";
interface Props {
  page: string;
}
export default function VideosContainer(props: Props) {
  return (
    <Fragment>
      <Header type={"videos"} />
      <SectionContainer type={"videos"} />
      {props.page === "search" ? <SearchContainer /> : <ExploreContainer />}
    </Fragment>
  );
}
