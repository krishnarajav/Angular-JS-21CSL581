import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp5Component } from './exp5.component';

describe('Exp5Component', () => {
  let component: Exp5Component;
  let fixture: ComponentFixture<Exp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
