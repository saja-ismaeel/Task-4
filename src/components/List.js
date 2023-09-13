import React from "react";
import { places } from "./Data";
import Place from "./Place";
import { useMyContext } from "./MyContext";



const List = () => {
  const { isLarge } = useMyContext(); 

  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} isLarge={isLarge} /> 
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default List;
