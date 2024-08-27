import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp11Component } from './exp11.component';

describe('Exp11Component', () => {
  let component: Exp11Component;
  let fixture: ComponentFixture<Exp11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
