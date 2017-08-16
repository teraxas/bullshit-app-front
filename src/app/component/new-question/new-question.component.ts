import {QuestionEntity} from '../../model/question';
import {QuestionService} from '../../service/question.service';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  questionForm: FormGroup;

  constructor(public dialogRef: MdDialogRef<NewQuestionComponent>,
    private questionService: QuestionService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.questionForm = this.createForm();
  }

  submitQuestion() {
    if (!this.questionForm.valid) {
      throw new Error('Form invalid');
    }
      const entity = this.questionForm.value as QuestionEntity;
      console.log(entity);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      question: ['', Validators.required],
      explanation: ['', Validators.required],
      bullshit: [''],
      user: this.fb.group({
        name: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

}
