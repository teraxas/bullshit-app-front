import { Injectable } from '@angular/core';
import { MdIconRegistry } from "@angular/material";

@Injectable()
export class AppSetupService {

  constructor(private mdIconRegistry: MdIconRegistry) {
    this.mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}
