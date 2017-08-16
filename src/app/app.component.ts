import { environment } from '../environments/environment';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ResultResponse } from './model/result';
import { QuestionService } from './service/question.service';
import { NewQuestionComponent } from './component/new-question/new-question.component';
import { MDDefaults } from "./app.defaults";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sidenavView: String;
  curentResult: ResultResponse;

  constructor(private dialog: MdDialog,
    private questionService: QuestionService) { }

  ngOnInit(): void {
    this.printInfo();

    this.questionService.getResult().subscribe(val => {
      this.curentResult = val;
      if (val.worthyToAddBullshit) {
        console.log('Worthy to add question! Displaying dialog');
        this.newQuestion();
      }
    });
  }

  newQuestion() {
    const dialogRef = this.dialog.open(NewQuestionComponent, MDDefaults.MD_DIALOG_CFG);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  forgetMe() {
    this.questionService.forgetResults();
  }

  private printInfo() {
    console.log('Bullshit app prod: ' + environment.production);
    console.log(environment);
  }
}
