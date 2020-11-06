import React, { useEffect } from "react";
import Axios from "axios";
// import VideoContainer from "./../VideoContainer/VideoContainer";
import { getVideosStart, getVideosSuccess } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { options } from "../../../store/constants";
import VideoContainer from "../VideoContainer/VideoContainer";

export default function SearchContainer() {
  /***
   *  ================================
   *   for calling apis
   *   we need to call apis everytime
   *   page rendered or onBottom scrool
   *   ================================
   */
  const query: any = window.location.search.split("?query=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    const onCallAPIS = () => {
      const url: string = `https://api.pexels.com/videos/search?query=${query}&per_page=30`;
      dispatch(getVideosStart(true));
      console.log(url);
      Axios.get(url, options)
        .then((res) => {
          console.log(res.data);
          const videos: IVideo[] = res.data.videos;
          dispatch(getVideosSuccess(videos));
          dispatch(getVideosStart(false));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (query !== "") onCallAPIS();
  }, [query, dispatch]);
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col col-md-auto">
            <p className="text-small">
              Search results for{"  "}
              <b className="text-bold" style={{ color: "#000" }}>
                " {query} "
              </b>
            </p>
          </div>
        </div>
        <VideoContainer />
      </div>
    </section>
  );
}
