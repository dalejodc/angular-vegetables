import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesListComponent } from './vegetables-list.component';

describe('VegetablesListComponent', () => {
  let component: VegetablesListComponent;
  let fixture: ComponentFixture<VegetablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
