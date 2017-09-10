import { TestBed, inject } from '@angular/core/testing';

import { AppSetupService } from './app-setup.service';

describe('AppSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSetupService]
    });
  });

  it('should be created', inject([AppSetupService], (service: AppSetupService) => {
    expect(service).toBeTruthy();
  }));
});
