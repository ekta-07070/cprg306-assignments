"use client";

import React, { useState } from "react";
import NewItem from "./new-item"; // Assuming this is the correct path for NewItem component
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className=" flex">
      <ul>
        <h1 className="text-3xl font-bold mb-4 p-4">Shopping List</h1>
          <div className="ml-8">
            <NewItem onAddItem={handleAddItem} />
          </div>
        <div className="ml-16">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </ul>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}

export default Page;
