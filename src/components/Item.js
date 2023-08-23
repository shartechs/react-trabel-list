import React from "react";

const Item = () => {
  return (
    <li>
      <input type="checkbox" />
      <span className="item-text">Item</span>
      <button>❌</button>
    </li>
  );
};

export default Item;
