import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp9',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exp9.component.html',
  styleUrls: ['./exp9.component.css'],
})

export class Exp9Component {
  employees: { name: string; salary: number }[] = [
    { name: 'John Doe', salary: 50000 },
    { name: 'Jane Doe', salary: 60000 },
    { name: 'Bob Smith', salary: 55000 },
    { name: 'Alice Johnson', salary: 70000 },
    { name: 'Charlie Brown', salary: 48000 },
  ];
  filteredEmployees: { name: string; salary: number }[] = [];
  searchName: string = '';
  searchSalary: number | undefined;
  searchEmployees() {
    this.filteredEmployees = this.employees.filter(emp =>
      this.matchesSearchCriteria(emp, this.searchName, this.searchSalary)
    );
  }
  private matchesSearchCriteria(emp: { name: string; salary: number }, name: string, salary: number|undefined): boolean {
    const nameMatch = !name || emp.name.toLowerCase().includes(name.toLowerCase());
    const salaryMatch = salary === undefined || emp.salary >= salary;
    return nameMatch && salaryMatch;
  }
}