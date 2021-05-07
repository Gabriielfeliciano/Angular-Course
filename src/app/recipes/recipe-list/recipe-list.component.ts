import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =  [

    new Recipe('Test Recipe','Description here','https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
