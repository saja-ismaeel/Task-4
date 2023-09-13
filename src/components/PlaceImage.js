import React from "react";
import { getImageUrl } from "./Utils";
import { useMyContext } from "./MyContext";

const PlaceImage = ({ place }) => {
  const { isLarge } = useMyContext(); 

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={isLarge ? 150 : 100} 
      height={isLarge ? 150 : 100}
    />
  );
};

export default PlaceImage;
