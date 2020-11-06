import React, { useEffect } from "react";
import Axios from "axios";
import { getPhotosStart, getPhotosSuccess } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { options } from "../../../store/constants";
import ImageContainer from "../ImagesContainer/ImageContainer";

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
      const url: string = `https://api.pexels.com/v1/search?query=${query}&per_page=50`;
      dispatch(getPhotosStart(true));
      console.log(url);
      Axios.get(url, options)
        .then((res) => {
          console.log(res.data);
          const photos: IPhoto[] = res.data.photos;
          dispatch(getPhotosSuccess(photos));
          dispatch(getPhotosStart(false));
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
                {query}
              </b>
            </p>
          </div>
        </div>
        <ImageContainer />
      </div>
    </section>
  );
}
