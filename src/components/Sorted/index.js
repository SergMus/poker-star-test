import React from "react";
import { getLabel } from "./../Cards";

function Sorting(props) {
  return (
    <ul className="cards mw8-ns">
      {props.array.map((card) => (
        <li>
          <img src={card.image} alt={getLabel(card)} />
        </li>
      ))}
    </ul>
  );
}

const Sorted = (props) => {
  return (
    <div>
      <Sorting array={props.sorted.spades} />
      <Sorting array={props.sorted.hearts} />
      <Sorting array={props.sorted.diamonds} />
      <Sorting array={props.sorted.clubs} />
    </div>
  );
};

export default Sorted;
