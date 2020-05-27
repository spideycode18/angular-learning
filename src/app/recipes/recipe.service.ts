import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Recipe', "This is a first Recipe", "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png"),
    new Recipe('A other Recipe', "This is a second Recipe", "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png")
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
