import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { BullshitMaterialModule } from './bullshit-material/bullshit-material.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './component/question/question.component';
import { NewQuestionComponent } from './component/new-question/new-question.component';
import { StatsComponent } from './component/stats/stats.component';
import { AboutComponent } from './component/about/about.component';

import { QuestionService } from './service/question.service';
import { BullshitWordService } from "./service/bullshit-word.service";
import { AppSetupService } from "./service/app-setup.service";

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
    HttpClientModule,
    ReactiveFormsModule,

    BullshitMaterialModule,
  ],
  providers: [
    AppSetupService,
    QuestionService,
    BullshitWordService
  ],
  entryComponents: [
    NewQuestionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
