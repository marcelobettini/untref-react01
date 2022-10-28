import React from "react";
import Ingredient from "./Ingredient";

function IngredientList({ title, list }) {
  return (
    <div className={"ingredients"}>
      <h3 className="title">{title}</h3>
      <ul>
        {list.map((ingredient, i) => (
          <Ingredient
            key={i}
            {...ingredient}
            // amount={ingredient.amount}
            // name={ingredient.name}
            // measurement={ingredient.measurement}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
