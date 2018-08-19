import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableDetailComponent } from './vegetable-detail.component';

describe('VegetableDetailComponent', () => {
  let component: VegetableDetailComponent;
  let fixture: ComponentFixture<VegetableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
