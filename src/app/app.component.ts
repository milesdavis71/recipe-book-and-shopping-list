import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-book-and-shopping-list';
  loadedFeature = 'recipes';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
