import { useState } from 'react';

const Zoom = ({ src, zoomLevel = 2, zoomBoxSize = 200 }) => {
  const [zoomBoxPosition, setZoomBoxPosition] = useState({ left: 0, top: 0 });
  const [zoomedIn, setZoomedIn] = useState(false);

  const handleMouseMove = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const boxHalfSize = zoomBoxSize;
    const boxLeft = Math.max(
      Math.min(x - boxHalfSize, target.clientWidth - zoomBoxSize),
      0
    );
    const boxTop = Math.max(
      Math.min(y - boxHalfSize, target.clientHeight - zoomBoxSize),
      0
    );

    setZoomBoxPosition({ left: boxLeft, top: boxTop });
  };

  const handleMouseEnter = () => {
    setZoomedIn(true);
  };

  const handleMouseLeave = () => {
    setZoomedIn(false);
  };

  return (
    <div className="flex items-center">
      <img
        src={src}
        alt="product"
        className=""
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className="relative border-2 border-solid "
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `-${zoomBoxPosition.left * zoomLevel}px -${
            zoomBoxPosition.top * zoomLevel
          }px`,
          display: zoomedIn ? 'block' : 'none',
          width: `${zoomBoxSize * zoomLevel}px`,
          height: `${zoomBoxSize * zoomLevel}px`,
        }}
      />
    </div>
  );
};

export default Zoom;
