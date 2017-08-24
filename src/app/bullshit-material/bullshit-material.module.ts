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
  MdTooltipModule,
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
    MdTooltipModule,
  ],
  declarations: []
})
export class BullshitMaterialModule { }
