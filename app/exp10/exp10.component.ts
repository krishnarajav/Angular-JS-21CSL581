import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exp10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exp10.component.html',
  styleUrls: ['./exp10.component.css'],
})

export class Exp10Component {
  items: string[] = ['Apple', 'Banana', 'Milk']; // Default items
  itemCount: number = this.items.length;
  newItem: string = ''; // Add a property to bind to the input
  addItem(): void {
    if(this.newItem && !this.items.includes(this.newItem)) {
      this.items.push(this.newItem);
      this.itemCount = this.items.length;
      this.newItem = '';
    }
  }
  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.itemCount = this.items.length;
  }
}
