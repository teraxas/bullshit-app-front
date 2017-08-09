import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BullshitMaterialModule } from './bullshit-material/bullshit-material.module';

import { AppComponent } from './app.component';
import { QuestionService } from './service/question.service';
import { QuestionComponent } from './component/question/question.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    BullshitMaterialModule,
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
