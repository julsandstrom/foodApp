import { useState } from "react";

const DisplayData = ({ meal, image, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <li>
        <h2>{meal}</h2>
        <img src={image} alt="meal image" />
        <button onClick={() => setShowInfo(!showInfo)}>How To</button>
      </li>
      {showInfo && (
        <div className="modal" onClick={() => setShowInfo(!showInfo)}>
          {description}
        </div>
      )}
    </>
  );
};
export default DisplayData;
