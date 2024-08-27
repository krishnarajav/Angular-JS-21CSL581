import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp3',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './exp3.component.html',
  styleUrls: ['./exp3.component.css']
})
export class Exp3Component {
  result: number | null = null;
  num1: number | null = null;
  num2: number | null = null;
  operator: string = '';
  calculate(): void {
    if(this.num1 !== null && this.num2 !== null) {
      if(this.operator){
        switch (this.operator) {
          case '+':
            this.result = this.num1 + this.num2;
            break;
          case '-':
            this.result = this.num1 - this.num2;
            break;
          case '*':
            this.result = this.num1 * this.num2;
            break;
          case '/':
            this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
            break;
          default:
            this.result = 0;
            break;
        }
      }
      else
        alert("Select an operator");
    }
    else  {
      alert("Fill both inputs");
    }
  }
}
