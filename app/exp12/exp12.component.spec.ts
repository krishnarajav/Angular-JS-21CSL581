import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp12Component } from './exp12.component';

describe('Exp12Component', () => {
  let component: Exp12Component;
  let fixture: ComponentFixture<Exp12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
