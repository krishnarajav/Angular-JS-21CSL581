import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Exp1Component } from './exp1/exp1.component';
import { Exp2Component } from './exp2/exp2.component';
import { Exp3Component } from './exp3/exp3.component';
import { Exp4Component } from './exp4/exp4.component';
import { Exp5Component } from './exp5/exp5.component';
import { Exp6Component } from './exp6/exp6.component';
import { Exp7Component } from './exp7/exp7.component';
import { Exp8Component } from './exp8/exp8.component';
import { Exp9Component } from './exp9/exp9.component';
import { Exp10Component } from './exp10/exp10.component';
import { Exp11Component } from './exp11/exp11.component';
import { Exp12Component } from './exp12/exp12.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Exp1Component, Exp2Component, Exp3Component, Exp4Component, Exp5Component, Exp6Component, Exp7Component, Exp8Component, Exp9Component, Exp10Component, Exp11Component, Exp12Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lab';
}
