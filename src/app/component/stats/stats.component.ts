import {ResultResponse} from '../../model/result';
import {QuestionService} from '../../service/question.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {
  resultSub: Subscription;
  result: ResultResponse;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.resultSub = this.questionService.getResult()
      .subscribe(r => this.result = r);

    this.questionService.getCurrentResult()
      .subscribe(r => this.result = r);
  }

  ngOnDestroy(): void {
    this.resultSub.unsubscribe();
  }

}
