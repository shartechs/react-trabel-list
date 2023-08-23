import React from "react";

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        <li>
          <input type="checkbox" />
          <span className="item-text">Item</span>
          <button>❌</button>
        </li>
      </ul>

      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
