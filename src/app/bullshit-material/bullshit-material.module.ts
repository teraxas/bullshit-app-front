import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdProgressSpinnerModule,
  MdSidenavModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdSidenavModule,
  ],
  declarations: []
})
export class BullshitMaterialModule { }
