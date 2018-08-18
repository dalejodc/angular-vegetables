import { TestBed, inject } from '@angular/core/testing';

import { VegetablesService } from './vegetables.service';

describe('VegetablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VegetablesService]
    });
  });

  it('should be created', inject([VegetablesService], (service: VegetablesService) => {
    expect(service).toBeTruthy();
  }));
});
