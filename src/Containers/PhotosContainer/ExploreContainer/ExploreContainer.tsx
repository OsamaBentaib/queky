import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getPhotosStart, getPhotosSuccess } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../../store/constants";
import ImageContainer from "../ImagesContainer/ImageContainer";
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
      if (page > 1) pg = `&page=${nmbRequests}`;
      const url: string = `https://api.pexels.com/v1/curated?per_page=12${pg}`;
      dispatch(getPhotosStart(true));
      Axios.get(url, options)
        .then((res) => {
          console.log(res.data);
          const photos: IPhoto[] = res.data.photos;
          dispatch(getPhotosSuccess(photos));
          dispatch(getPhotosStart(false));
          setNmbRequests(nmbRequests + 1);
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
  }, [nmbRequests, onCallAPIS]);
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
        <ImageContainer />
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
