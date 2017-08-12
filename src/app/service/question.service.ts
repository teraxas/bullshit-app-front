import { Injectable, OnInit } from '@angular/core';
import { environment } from './../../environments/environment'
import {RequestOptions, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { QuestionResponse, Question } from '../model/question';
import { ResultResponse } from '../model/result';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class QuestionService {
  private static readonly questionsEndpoint = `${environment.apiUrl}/question`;
  private static readonly questionsGetUrl = `${QuestionService.questionsEndpoint}/get`;
  private static readonly questionsRespondUrl = `${QuestionService.questionsEndpoint}/answer`;

  private static readonly requestOptions = new RequestOptions({withCredentials: true });

  private responseSubject = new Subject<QuestionResponse>();
  private resultObservable: Observable<ResultResponse>;


  constructor(private http: Http) {
    this.init();
  }

  init(): void {
    this.resultObservable = this.responseSubject
      .switchMap(response => response ? this.sendResponse(response) : Observable.of(null));
  }

  get(): Observable<Question> {
    return this.http.get(QuestionService.questionsGetUrl, QuestionService.requestOptions)
      .map(val => val.json() as Question);
  }

  respond(response: QuestionResponse) {
    this.responseSubject.next(response);
  }

  getResult(): Observable<ResultResponse> {
    return this.resultObservable;
  }

  private sendResponse(response: QuestionResponse): Observable<ResultResponse> {
    return this.http.post(QuestionService.questionsRespondUrl, response, QuestionService.requestOptions)
      .map(val => val.json() as ResultResponse);
  }

}
