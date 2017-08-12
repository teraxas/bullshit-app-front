import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdSidenavModule } from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdSidenavModule
  ],
  declarations: []
})
export class BullshitMaterialModule { }
