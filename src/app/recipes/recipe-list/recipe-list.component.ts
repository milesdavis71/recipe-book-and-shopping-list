import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model.js';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
