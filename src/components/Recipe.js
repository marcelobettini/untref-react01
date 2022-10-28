import React from "react";
import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

export default function Recipe({ id, name, pic, ingredients, steps }) {
  return (
    <article key={id} className="recipe">
      <h1>{name}</h1>
      <div className="img-ingredients">
        <img src={pic} width="200" title={`Recipe: ${name}`} alt={name} />
        <IngredientList title={"Ingredients"} list={ingredients} />
      </div>
      <Instructions title={"Cooking instructions"} steps={steps} />
    </article>
  );
}
