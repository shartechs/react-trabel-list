import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, quantity: 5, name: "Item", packed: true },
  ]);
  const addNewItem = (item) => {
    setItems([item, ...items]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div>
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
      <Stats />
    </div>
  );
};

export default App;
