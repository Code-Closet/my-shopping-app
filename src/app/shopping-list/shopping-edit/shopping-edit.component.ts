import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  @Output() newIngredient= new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    if (this.ingredientName.nativeElement.value && this.ingredientAmount.nativeElement.value){
      this.slService.addIngredient(new Ingredient(
          this.ingredientName.nativeElement.value,
          this.ingredientAmount.nativeElement.value));
      }
  }
}
