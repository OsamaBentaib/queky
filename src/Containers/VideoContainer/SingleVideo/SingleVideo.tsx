import React from "react";
import { FiExternalLink, FiX } from "react-icons/fi";


interface Props {
  video?: IVideo;
  onClose?: any;
}
export default function SingleVideo(props: Props) {
  const { video, onClose } = props;
  return (
    <div
      className="modal modal__ fade show"
      id="cookies-modal"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ display: " block", paddingRight: "17px" }}
    >
      <div className="col-auto float-right right">
        <button onClick={() => onClose()} className="btn">
          <FiX color="#fff" size="20px" />
        </button>
      </div>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row justify-content-center">
              <div className="col">
                <div className="avatar-author align-items-center">
                  <div className="ml-2">
                    <h6>
                      By {video?.user.name}{" "}
                      <a className="ml-2" href={`${video?.user.url}`}>
                        <FiExternalLink size="15" />
                        <small className="ml-1">open on pexels</small>
                      </a>
                    </h6>
                    <small>Photographer</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card mt-3">
                      <video controls={true} autoPlay={true}>
                        <source src={video?.video_files[3].link} />
                      </video>
                    </div>
                    <div className="mt-2 mb-2 text-center">
                      By <a href="https://pexels.com/">Pexels.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
