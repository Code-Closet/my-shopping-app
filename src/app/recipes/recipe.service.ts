import { RecipeModel } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService) {}

    selectedRecipe = new EventEmitter<RecipeModel>();
    recipes: RecipeModel[] = [
        new RecipeModel('One-pot-chicken-recipe',
        'Heat olive oil in a large pot on medium heat,' +
        ' then add chicken, season with salt and pepper, and sauté for 8 minutes. Add garlic and ginger,' +
        ' sauté for 2 minutes until fragrant, then add 2 cups of water and the rice, and stir. ' +
        'Cover the pot and bring water to a boil. Uncover, stir, then reduce heat to low.',
        'http://www.seriouseats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-04.jpg',
        [new Ingredient('chicken', 1), new Ingredient('garlic', 4)]),
        new RecipeModel('BeefPotPie',
        'Use leftover beef pot roast and cooked vegetables to make this pie.' +
        ' You can also combine and cook diced carrots and peas to make 2 cups (500 mL) or used frozen ' +
        'vegetables instead.',
        'http://www.cbc.ca/bestrecipes/content/images/recipes/Recipe_BeefPotPie-thumb-496x252-16224.jpg',
        [new Ingredient('beef', 2), new Ingredient('carrots', 3)]),
        new RecipeModel('Margherita',
        'Mozzarella, Parmesan, fresh tomatoes, basil, tomato sauce',
        'http://saltspringmercantile.com/wp-content/uploads/2016/03/pizza.jpg',
        [new Ingredient('Mozzarella', 1), new Ingredient('tomatoes', 2)])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToSL(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
}