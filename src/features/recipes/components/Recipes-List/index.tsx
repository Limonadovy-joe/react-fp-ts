import React from 'react';

import { Recipe as RecipeType } from '../../types';

import { Recipe } from '../Recipe';

type RecipesListProps = {
  recipes: RecipeType[];
};

export const RecipesList = ({ recipes }: RecipesListProps) => (
  <div>
    <h1>Recipes</h1>
    {recipes.map((props) => (
      <Recipe key={`${props.id}`} {...props} />
    ))}
  </div>
);
