import React, { useState } from "react";

const Form = ({ addNewItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      alert("Please enter a valid item");
      return;
    }
    const newItem = { id: Date.now(), quantity, name: text, packed: false };
    addNewItem(newItem);
    setQuantity(1);
    setText("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
