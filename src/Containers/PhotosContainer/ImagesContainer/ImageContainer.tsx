import React, { Fragment, useState } from "react";
import Image from "../../../Components/Image/Image";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
export default function ImageContainer() {
  const photos: IPhoto[] | undefined = useSelector(
    (state: initState) => state.photos
  );
  const [ openPhoto, setOpenPhoto ] = useState<IPhoto|null>(null);
  const onOpenModal = (photo: IPhoto) => {
    setOpenPhoto(photo);
  }
  const onCloseModal = (photo: IPhoto) => {
    setOpenPhoto(null);
  };
  return (
    <Fragment>
      {openPhoto && <SinglePhoto photo={openPhoto} onClose={onCloseModal} />}
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
        {photos &&
          photos?.map((photo: IPhoto, index: number) => (
            <Image onOpenModal={onOpenModal} key={index} photo={photo} />
          ))}
      </Masonry>
    </Fragment>
  );
}
