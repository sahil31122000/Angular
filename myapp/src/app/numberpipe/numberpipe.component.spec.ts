import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberpipeComponent } from './numberpipe.component';

describe('NumberpipeComponent', () => {
  let component: NumberpipeComponent;
  let fixture: ComponentFixture<NumberpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberpipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
