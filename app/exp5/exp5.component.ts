import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp5',
  imports: [CommonModule, FormsModule],
  templateUrl: './exp5.component.html',
  styleUrls: ['./exp5.component.css'],
  standalone: true,
})

export class Exp5Component {
  students: { name: string; USN: string; CGPA: string }[] = [
    { name: 'Arjun', USN: '4MT21CS001', CGPA: '8.94' },
    { name: 'Akash', USN: '4MT21CS002', CGPA: '8.54' },
    { name: 'Akshay', USN: '4MT21CS003', CGPA: '9.01' },
    { name: 'Akshara', USN: '4MT21CS004', CGPA: '7.51' },
    { name: 'Aarthi', USN: '4MT21CS005', CGPA: '6.78' },
  ];
  total = this.students.length;
  displayedStudents: { name: string; USN: string; CGPA: string }[] = [];
  studentCount: number=0;
  sCount: number | null = null;
  displayStudents() {
    this.displayedStudents = this.students.slice(0, this.studentCount);
    this.sCount = this.displayedStudents.length;
  }
}
