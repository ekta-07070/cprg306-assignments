import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="bg-violet-300 p-2 w-auto mt-7 ml-0"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <span className="font-bold text-xl">Name: {name}</span>
      <p>
        buy {quantity} in the {category} category
      </p>
    </li>
  );
};

export default Item;
