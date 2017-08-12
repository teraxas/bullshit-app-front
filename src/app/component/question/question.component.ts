import {ResultResponse} from '../../model/result';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { Subject, Subscription, Observable } from 'rxjs/Rx';

import { Question } from '../../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionsSubject = new Subject<any>();
  questionObservable: Observable<Question>;
  questionSubscription: Subscription;
  question: Question;
  questionLoading = false;

  result: ResultResponse;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionObservable = this.questionsSubject
      .debounceTime(1000)
      .switchMap(() => {
        this.questionLoading = true;
        return this.questionService.get();
      });

    this.questionObservable.subscribe(
      val => this.question = val,
      null,
      () => this.questionLoading = false
    );

    this.questionService.getResult()
      .subscribe(val => {
        this.result = val;
      });
  }

  loadQuestion() {
    this.questionsSubject.next();
  }

  respondQuestion(bullshit: boolean) {
    this.questionService.respond({
      id: this.question.id,
      answer: bullshit
    });
    this.question = null;
  }

}
