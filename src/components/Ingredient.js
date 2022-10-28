import React from "react";

const Ingredient = ({ amount, measurement, name }) => {
  return (
    <li>
      {amount} {name} {measurement}
    </li>
  );
};

export default Ingredient;
