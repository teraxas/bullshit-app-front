import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';

import { BullshitMaterialModule } from './bullshit-material/bullshit-material.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './component/question/question.component';
import { NewQuestionComponent } from './component/new-question/new-question.component';
import { StatsComponent } from './component/stats/stats.component';
import { AboutComponent } from './component/about/about.component';

import { QuestionService } from './service/question.service';
import { DialogService } from './service/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    StatsComponent,
    AboutComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    BullshitMaterialModule,
  ],
  providers: [
    QuestionService,
    DialogService
  ],
  entryComponents: [
    NewQuestionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
