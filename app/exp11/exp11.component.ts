import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exp11',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exp11.component.html',
  styleUrls: ['./exp11.component.css']
})

export class Exp11Component {
  students: Student[] = [
    { name: 'John Doe', grade: 'A' },
    { name: 'Jane Doe', grade: 'B' },
    { name: 'Alice Smith', grade: 'C' }
  ];
}

export interface Student {
  name: string;
  grade: string;
}
