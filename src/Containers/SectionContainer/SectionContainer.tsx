import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ReactComponent as Divider } from "./../../assets/svg/divider.svg";
interface Props {
  onStartSearching?: any;
  type: string;
}
export default function SectionContainer(props: Props) {
  const { type } = props;
  const [query, setQuery] = useState("");
  const onRedir = (href: string) => {
    window.location.href = href;
  };
  return (
    <section className="bg-primary-3 has-divider text-light">
      <div className="container pb-6">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h1 className="display-4 mb-5">Free stock photos & videos</h1>
            <small className="lead">
              Search on more Milions of{" "}
              {type === "photos" ? "photos" : "videos"} for free
            </small>
            <div className="mt-3">
              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend border-0 border0">
                  <span
                    className="input-group-text border-0 border0"
                    id="basic-addon-1"
                  >
                    <FiSearch size="18" />
                  </span>
                </div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="form-control border0 border-0"
                  placeholder={`Search for ${type}`}
                />
                <div className="input-group-prepend border-0 border0">
                  <button
                    onClick={() => onRedir(`/${type}/search/?query=${query}`)}
                    className="btn btn-dark border"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex text-small">
              <span className="text-muted">Popular : </span>
              <ul className="list-unstyled d-flex ml-2 flex-wrap">
                <li className="mx-1">
                  <span
                    className="pointer"
                    onClick={() => onRedir(`/${type}/search/?query=nature`)}
                  >
                    nature
                  </span>
                </li>
                <li className="mx-1">
                  <span
                    className="pointer"
                    onClick={() => onRedir(`/${type}/search/?query=people`)}
                  >
                    people
                  </span>
                </li>
                <li className="mx-1">
                  <span
                    className="pointer"
                    onClick={() => onRedir(`/${type}/search/?query=cities`)}
                  >
                    cities
                  </span>
                </li>
                <li className="mx-1">
                  <span
                    className="pointer"
                    onClick={() => onRedir(`/${type}/search/?query=arts`)}
                  >
                    arts
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <Divider />
      </div>
    </section>
  );
}
