import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exp1.component.html',
  styleUrls: ['./exp1.component.css'],
})

export class Exp1Component {
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';

  displayFullName(): string{
    if(this.firstName=='' && this.lastName==''){
      alert('Please enter the name inside the box');
      return '';
    }
      
    return this.firstName+' '+this.lastName;
  }
}
