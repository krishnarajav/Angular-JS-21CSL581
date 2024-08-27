import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp9Component } from './exp9.component';

describe('Exp9Component', () => {
  let component: Exp9Component;
  let fixture: ComponentFixture<Exp9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
