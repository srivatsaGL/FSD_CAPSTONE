import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcartComponent } from './foodcart.component';

describe('FoodcartComponent', () => {
  let component: FoodcartComponent;
  let fixture: ComponentFixture<FoodcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
