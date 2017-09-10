import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs/Rx";

@Injectable()
export class BullshitWordService {
  private wordlist: Observable<BSWord[]>;
  private nextWordSubject = new Subject();
  private nextWordObservable: Observable<BSWord>;

  constructor(private http: HttpClient) {
    this.nextWordObservable = this.nextWordSubject
      .debounceTime(1000)
      .switchMap(() => this.getWord())
      .share();
  }

  getNextWordObservable(): Observable<BSWord> {
    return this.nextWordObservable;
  }

  nextWord() {
    this.nextWordSubject.next();
  }

  private getWord(): Observable<BSWord> {
    return this.getWordlist()
      .map(val => {
        const l = val.length;
        const index = this.randomIntFromInterval(0, l-1);
        return val[index];
      });
  }

  private getWordlist(): Observable<BSWord[]> {
    if (!this.wordlist) {
      this.wordlist = this.http.get<BSWord[]>("/assets/bullshit.json")
        .publishLast()
        .refCount();
    }
    return this.wordlist;
  }

  private randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

export class BSWord {
  group: string;
  language: string;
  value: string;
}
