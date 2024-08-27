import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp7',
  templateUrl: './exp7.component.html',
  styleUrls: ['./exp7.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})

export class Exp7Component {
  users: { id: number; name: string; email: string }[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
  ];
  newUser: { name: string; email: string } = { name: '', email: '' };
  editingUserIndex: number| null=null;
  editingUser: {name: string; email: string } = {name:'', email:''};

  addUser() {
    if (this.newUser.name !== '' || this.newUser.email !== '') {
      const newUser = {
        id: this.users.length + 1,
        name: this.newUser.name,
        email: this.newUser.email,
      };
      this.users.push(newUser);
      this.newUser = { name: '', email: '' };
    }
  }

  editUser(i: number) {
    this.editingUserIndex = i;
    this.editingUser.name= this.users[this.editingUserIndex].name;
    this.editingUser.email = this.users[this.editingUserIndex].email;
  }

  updateUser() {
    if (this.editingUserIndex !== null) {
      if(this.editingUser.name){
        this.users[this.editingUserIndex].name = this.editingUser.name;
        this.users[this.editingUserIndex].email = this.editingUser.email;
        this.editingUserIndex = null;
      }
    }
  }

  cancelEdit() {
    this.editingUserIndex = null;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

