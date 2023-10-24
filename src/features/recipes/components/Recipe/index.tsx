import React from 'react';

import { Recipe as RecipeType } from '../../types';

import { IngredientsList } from '../Ingredients-List';

type RecipeProps = RecipeType;

export const Recipe = ({ id, ingredients, name }: RecipeProps) => {
  return (
    <>
      <h2>{name}</h2>
      <IngredientsList ingredients={ingredients} />
    </>
  );
};
