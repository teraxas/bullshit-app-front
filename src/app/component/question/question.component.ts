import { ResultResponse } from '../../model/result';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { Subject, Subscription, Observable } from 'rxjs/Rx';

import { Question } from '../../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  questionsSubject = new Subject<any>();
  questionObservable: Observable<Question>;
  questionSubscription: Subscription;
  resultSubscription: Subscription;
  question: Question;
  questionLoading = false;
  noQuestions = false;

  result: ResultResponse;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionObservable = this.questionsSubject
      .debounceTime(1000)
      // .onErrorResumeNext() // TODO
      .switchMap(() => {
        this.noQuestions = false;
        return this.questionService.get();
      });

    this.questionSubscription = this.questionObservable.subscribe(
      val => {
        this.question = val;
        this.noQuestions = val ? false : true;
        this.questionLoading = false;
      }
    );

    this.resultSubscription = this.questionService.getResult()
      .subscribe(val => {
        console.log('Result', val);
        this.result = val;
        this.loadQuestion();
      });
  }

  ngOnDestroy(): void {
    this.questionSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
  }

  loadQuestion() {
    this.questionLoading = true;
    console.log('questionLoading', this.questionLoading);
    this.questionsSubject.next();
  }

  respondQuestion(bullshit: boolean) {
    this.questionService.respond({
      id: this.question.id,
      answer: bullshit
    });
  }

}
