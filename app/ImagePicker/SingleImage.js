import Image from "next/image";

export default function SingleImage({ isSelected, src, onImageClick }) {
  return (
    <div
      className={`responsive${isSelected ? " selected" : ""}`}
      onClick={onImageClick}
    >
      <Image
        src={src}
        className={`thumbnail${isSelected ? " selected" : ""} object-cover`}
        style={ImageStyle(150, 150)}
        height={150}
        width={150}
        alt=""
      />
      <div className="checked">
        {/*<img src={imgCheck} style={{ width: 75, height: 75, objectFit: "cover" }}/>*/}
        <div className="icon" />
      </div>
    </div>
  );
}
