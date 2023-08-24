import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, deleteItem, updateItem, clearItems }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = [...items];
      break;
    case "name":
      sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "packed":
      sortedItems = [...items].sort((a, b) => a.packed - b.packed);
      break;
    default:
      sortedItems = [...items];
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="name">Sort by name</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearItems}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
