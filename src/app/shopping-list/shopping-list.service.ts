import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  //  1. shopping list renderelése
  //  2. új listaelem hozzáadása

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];
  onIngredientAdded(newItem: Ingredient) {
    this.ingredients.push(newItem);
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
