import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdSidenavModule,
  MdSnackBarModule,
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
    MdSnackBarModule,
  ],
  declarations: []
})
export class BullshitMaterialModule { }
