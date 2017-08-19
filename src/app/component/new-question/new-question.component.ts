import { QuestionEntity } from '../../model/question';
import { QuestionService } from '../../service/question.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewQuestionComponent implements OnInit {

  questionForm: FormGroup;
  saving = false;

  constructor(
    public dialogRef: MdDialogRef<NewQuestionComponent>,
    private questionService: QuestionService,
    private fb: FormBuilder,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.questionForm = this.createForm();
  }

  submitQuestion(form: NgForm) {
    if (!this.questionForm.valid) {
      throw new Error('Form invalid');
    } else {
      this.saving = true;
    }
    const entity = this.questionForm.value as QuestionEntity;
    this.questionService.create(entity)
      .subscribe(() => {
        console.log('Successfully saved question: ', entity);
        this.dialogRef.close('Saved!');
        this.saving = false;
        this.snackBar.open('Question saved!', 'Cool', {duration: 3000});
      });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      question: ['', Validators.required],
      explanation: ['', Validators.required],
      bullshit: [''],
      creator: this.fb.group({
        name: ['', Validators.required]
      })
    });
  }

}
