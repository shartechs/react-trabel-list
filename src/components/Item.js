import React from "react";

const Item = ({ item }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
