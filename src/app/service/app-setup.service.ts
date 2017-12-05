import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Injectable()
export class AppSetupService {

  constructor(private mdIconRegistry: MatIconRegistry) {
    this.mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}
