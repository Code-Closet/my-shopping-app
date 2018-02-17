import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('New Recipe', 'Description',
    'http://www.seriouseats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-04.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
