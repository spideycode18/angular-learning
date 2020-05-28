import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Recipe',
      "This is a first Recipe",
      "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png",
      [
        new Ingredient('Meat', 5),
        new Ingredient('Chicken', 3)
      ]
      ),
    new Recipe(
      'A other Recipe',
      "This is a second Recipe",
      "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png",
      [
        new Ingredient('Mushroom', 2),
        new Ingredient('Vegetables', 7)
      ]
    )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
