import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exp8.component.html',
  styleUrls: ['./exp8.component.css'],
})
export class Exp8Component {
  username: string = '';
  password: string = '';
  usernameInputTouched: boolean = false;
  passwordInputTouched: boolean = false;
  loginSuccessful: boolean = false;
  get usernameInputInvalid(): boolean {
    return this.usernameInputTouched && (this.usernameRequired || this.usernameMinlength);
  }
  get passwordInputInvalid(): boolean {
    return this.passwordInputTouched && (this.passwordRequired || this.passwordMinlength);
  }
  get usernameRequired(): boolean {
    return this.username.trim() === '';
  }
  get usernameMinlength(): boolean {
    return this.username.length < 5;
  }
  get passwordRequired(): boolean {
    return this.password.trim() === '';
  }
  get passwordMinlength(): boolean {
    return this.password.length < 8;
  }
  isValidForm(): boolean {
    return !this.usernameInputInvalid && !this.passwordInputInvalid;
  }
  login() {
    this.usernameInputTouched = true;
    this.passwordInputTouched = true;
    if (this.isValidForm()) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // Perform your authentication logic here
      // For now, let's simulate a successful login
      this.loginSuccessful = true;
    }
  }
}