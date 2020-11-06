import React from "react";
import { FiPlay } from "react-icons/fi";

interface Props {
  video: IVideo;
  onOpenModal?: any;
}
export default function Video(props: Props) {
  const { video, onOpenModal } = props;
  return (
    <div className="pointer">
      <div className="video-poster rounded mb-3">
        <button
          onClick={() => onOpenModal(video)}
          className="btn btn-lg btn-primary btn-round"
        >
          <FiPlay size="19px" color="#fff" />
        </button>
        <img
          className="w-100 rounded"
          src={video.video_pictures[0].picture}
          alt="..."
        />
      </div>
    </div>
  );
}
//onClick={() => onOpenModal(video)}
