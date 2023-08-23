import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, quantity: 5, name: "Item", packed: false },
  ]);
  const addNewItem = (item) => {
    setItems([item, ...items]);
  };
  return (
    <div>
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default App;
