import React from "react";
import ReactAudioPlayer from "react-audio-player";
interface Props {
  preview?: Preview;
}

export default function PlayingNow(props: Props) {
  return (
    <div className="card mb-n3">
      <img
        src={props?.preview?.poster}
        alt="..."
        className={`w-100 border-0 ${props?.preview?.url ? "" : "--disabled"}`}
      />
      <div style={{ display: "none" }}>
        <ReactAudioPlayer src={props?.preview?.url} autoPlay />
      </div>
    </div>
  );
}
