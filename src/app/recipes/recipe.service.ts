import { Recipe } from './recipe.model';

export class RecipeService {
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
