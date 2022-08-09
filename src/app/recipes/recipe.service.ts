import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simple a text',
      'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Dry/Quick_Cauliflower_Sabzi_Recipe-1.jpg'
    ),
    new Recipe(
      'An another test recipe',
      'This is simple a text',
      'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Dry/Quick_Cauliflower_Sabzi_Recipe-1.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
