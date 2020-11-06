import React from "react";
interface Props {
  photo: IPhoto;
  onOpenModal: any;
}
export default function Image(props: Props) {
  const { photo, onOpenModal } = props;
  return (
    <div onClick={() => onOpenModal(photo)} className="pointer">
      <div className="card min-vh-10">
        <img className="w-100 rounded" src={photo.src.large} alt="..." />
      </div>
    </div>
  );
}
