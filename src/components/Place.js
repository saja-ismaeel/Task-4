import React from "react";
import PlaceImage from "./PlaceImage";
import { useMyContext } from "./MyContext";

const Place = ({ place }) => {
  const { isLarge } = useMyContext(); 

  return (
    <>
      <PlaceImage place={place} isLarge={isLarge} /> 
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

export default Place;
