import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdSidenavModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdSidenavModule,
  ],
  declarations: []
})
export class BullshitMaterialModule { }
