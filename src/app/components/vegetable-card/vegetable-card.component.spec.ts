import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableCardComponent } from './vegetable-card.component';

describe('VegetableCardComponent', () => {
  let component: VegetableCardComponent;
  let fixture: ComponentFixture<VegetableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
