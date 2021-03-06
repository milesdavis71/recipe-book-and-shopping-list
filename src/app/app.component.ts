import { Component } from '@angular/core';

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
