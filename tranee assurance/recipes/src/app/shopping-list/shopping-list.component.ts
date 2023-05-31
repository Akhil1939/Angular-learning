import { Ingredient } from './../shared/ingedients.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
 Ingredients: Ingredient[] = [
    new Ingredient(1,'Apples', 5),
    new Ingredient(2,'Tomatoes', 10),
    new Ingredient(3,'Potatoes', 15),
    new Ingredient(4,'Onions', 20),
    new Ingredient(5,'Carrots', 25),
    new Ingredient(6,'Cabbage', 30),
    new Ingredient(7,'Cauliflower', 35)
  ];
}
