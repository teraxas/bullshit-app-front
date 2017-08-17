import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { QuestionEntity, QuestionResponse,  Question } from '../model/question';
import { ResultResponse } from '../model/result';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class QuestionService {
  private static readonly questionsEndpoint = `${environment.apiUrl}/question`;
  private static readonly questionsGetUrl = `${QuestionService.questionsEndpoint}/get`;
  private static readonly questionsRespondUrl = `${QuestionService.questionsEndpoint}/answer`;
  private static readonly createUrl = `${QuestionService.questionsEndpoint}/create`;

  private static readonly requestOptions = {withCredentials: true };

  private responseSubject = new Subject<QuestionResponse>();
  private resultObservable: Observable<ResultResponse>;


  constructor(private http: HttpClient) {
    this.init();
  }

  init(): void {
    this.resultObservable = this.responseSubject
      .switchMap(response => response ? this.sendResponse(response) : Observable.of(null));
  }

  get(): Observable<Question> {
    return this.http.get<Question>(QuestionService.questionsGetUrl, QuestionService.requestOptions);
  }

  create(question: QuestionEntity) {
    return this.http.post(QuestionService.createUrl, question, QuestionService.requestOptions);
  }

  respond(response: QuestionResponse) {
    this.responseSubject.next(response);
  }

  getResult(): Observable<ResultResponse> {
    return this.resultObservable;
  }

  private sendResponse(response: QuestionResponse): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(QuestionService.questionsRespondUrl, response, QuestionService.requestOptions);
  }

}
