import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getVideosStart, getVideosSuccess } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { PROXY_URL, options } from "../../../store/constants";
import VideoContainer from "../VideoContainer/VideoContainer";
// import VideoCover from "react-video-cover";
import { FiLoader } from "react-icons/fi";

export default function ExploreContainer() {
  /***
   *
   *  The number of requests
   *  it's means the page that we want to call
   *  as default we will call the page 1
   *  and when the the person scrool it's will
   *  call default + 1 =>
   */
  const [nmbRequests, setNmbRequests] = useState(1);
  /***
   *  ================================
   *   for calling apis
   *   we need to call apis everytime
   *   page rendered or onBottom scrool
   *   ================================
   */

  const loading: boolean | undefined = useSelector(
    (state: initState) => state.loading
  );
  const onLoadMore = () => {
    if (nmbRequests > 1) {
      setNmbRequests(nmbRequests + 1);
      onCallAPIS(nmbRequests);
    }
  };
  const dispatch = useDispatch();
  const onCallAPIS = useCallback(
    (page: number) => {
      let pg = "";
      console.log(page);
      if (page > 1) pg = `&page=${nmbRequests}`;
      const url: string = PROXY_URL + `videos/popular?per_page=20${pg}`;
      dispatch(getVideosStart(true));
      Axios.get(url, options)
        .then((res) => {
          const videos: IVideo[] = res.data.videos;
          dispatch(getVideosSuccess(videos));
          dispatch(getVideosStart(false));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [dispatch, nmbRequests]
  );
  useEffect(() => {
    if (nmbRequests < 2) {
      setNmbRequests(nmbRequests + 1);
      onCallAPIS(1);
    }
  }, [onCallAPIS, setNmbRequests, nmbRequests]);
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col col-md-auto">
            <ul
              data-isotope-filters=""
              data-isotope-id="projects"
              className="nav mb-3"
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active .js-filter-inited"
                  data-filter="*"
                >
                  Trending
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <VideoContainer />
        <div className="text-center">
          {nmbRequests > 1 && (
            <button
              disabled={loading}
              onClick={() => onLoadMore()}
              className={`btn btn-primary ${loading && "disabled"}`}
            >
              {" "}
              {loading && <FiLoader color="#fff" size="16" />}
              {loading ? "Loading ..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
