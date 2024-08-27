import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp1Component } from './exp1.component';

describe('Exp1Component', () => {
  let component: Exp1Component;
  let fixture: ComponentFixture<Exp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
