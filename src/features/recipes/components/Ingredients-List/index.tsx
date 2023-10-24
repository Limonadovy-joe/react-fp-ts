import React from 'react';

import { Ingredients } from '../../types';

type IngredientsListProps = { ingredients: Ingredients };

export const IngredientsList = ({ ingredients }: IngredientsListProps) => (
  <>
    <ul>
      {ingredients.map((ingredience) => (
        <li key={ingredience}>{ingredience}</li>
      ))}
    </ul>
  </>
);
