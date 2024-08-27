import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp6Component } from './exp6.component';

describe('Exp6Component', () => {
  let component: Exp6Component;
  let fixture: ComponentFixture<Exp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
