"use client";

import React, { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

import { getItems, addItem } from "../_services/shopping-list-service";

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const userId = "currentUserUID";

  useEffect(() => {
    if (userId) {
      getItems(userId)
        .then((fetchedItems) => setItems(fetchedItems))
        .catch((error) => console.error("Error fetching items:", error));
    }
  }, [userId]);

  const handleAddItem = (newItem) => {
    addItem(userId, newItem)
      .then((newItemId) => {
        const newItemWithId = { ...newItem, id: newItemId };
        setItems((prevItems) => [...prevItems, newItemWithId]);
      })
      .catch((error) => console.error("Error adding item:", error));
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
