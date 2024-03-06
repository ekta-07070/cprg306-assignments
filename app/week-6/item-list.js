"use client";

import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = Array.isArray(items)
   ? [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  })
  : [];

  return (
    <div>
      <button
        onClick={() => setSortBy('name')}
        className="p-2 m-4 text-xl border border-pink-300 bg-pink-300 rounded-xl"
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        className="p-2 m-4 text-xl border border-pink-300  bg-pink-300 rounded-xl"
      >
        Sort by Category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
