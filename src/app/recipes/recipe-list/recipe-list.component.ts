import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() handleSelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Recipe', "This is a first Recipe", "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png"),
    new Recipe('A other Recipe', "This is a second Recipe", "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png")
  ];
  constructor() { }

  ngOnInit() {
  }

  forwardHandleSelect(recipe: Recipe) {
    this.handleSelectedRecipe.emit(recipe);
  }

}
