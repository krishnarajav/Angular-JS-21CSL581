import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exp4.component.html',
  styleUrls: ['./exp4.component.css']
})
export class Exp4Component {
  result: number = 0;
  num: number = 0;
  factorial(num: number): number {
    if (num == 1) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }

  calculateFactorial(inputNumber: number) {
    this.result = this.factorial(inputNumber);
  }

  calculateSquare(inputNumber: number) {
    this.result = inputNumber * inputNumber;
  }
}
