import React from "react";

const percentage = 100;

const Stats = () => {
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have  items on your list, and you already packed  (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
