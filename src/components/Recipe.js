import React from 'react'

export default function Recipe({ id, name, pic, ingredients, steps }) {
  return (
    <article key={id} className='recipe'>
      <h1>{name}</h1>
      <div className='img-ingredients'>
        <img src={pic} width='200' title={`Recipe: ${name}`} alt={name} />
        <div className='ingredients'>
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.amount} {ingredient.name} {ingredient.measurement}</li>
            ))
            }
          </ul>
        </div>
      </div>
      <section className='instructions'>
        <h3>Instructions</h3>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </article>
  )
}
