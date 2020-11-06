import React, { Fragment, useState } from "react";
import Video from "../../../Components/Video/Video";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import SingleVideo from "../SingleVideo/SingleVideo";

export default function VideoContainer() {
  const videos: IVideo[] | undefined = useSelector(
    (state: initState) => state.videos
  );
  const [openVideo, setOpenVideo] = useState<IVideo | null>(null);
  const onOpenModal = (video: IVideo) => {
    setOpenVideo(video);
  };
  const onCloseModal = (video: IVideo) => {
    setOpenVideo(null);
  };
  return (
    <Fragment>
      {openVideo && <SingleVideo video={openVideo} onClose={onCloseModal} />}
      <Masonry
        breakpointCols={{
          default: 3,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {videos &&
          videos?.map((video: IVideo, index: number) => (
            <Video key={index} onOpenModal={onOpenModal} video={video} />
          ))}
      </Masonry>
    </Fragment>
  );
}
