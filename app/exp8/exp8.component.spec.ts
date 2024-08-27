import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp8Component } from './exp8.component';

describe('Exp8Component', () => {
  let component: Exp8Component;
  let fixture: ComponentFixture<Exp8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
