import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp2',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './exp2.component.html',
  styleUrl: './exp2.component.css'
})
export class Exp2Component {
  shoppingItems: string[] = ['Apple', 'Banana', 'Orange', 'Milk', 'Chocolate Cake'];
  item: string = '';
  rItem: string = '';

  addItem() {
    if (this.item && !this.shoppingItems.includes(this.item)) {
      this.shoppingItems.push(this.item);
    }
  }
  
  removeItem() {
    if(this.shoppingItems.includes(this.rItem)){
      const index = this.shoppingItems.indexOf(this.rItem);
      this.shoppingItems.splice(index, 1);
    }
    else
      alert('There\'s no such item exists in the list');
  }
}
