import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { QuizAService } from './quiz-a.service';

@Component({
  selector: 'app-quiz-a',
  templateUrl: './quiz-a.component.html',
  styleUrls: ['./quiz-a.component.css']
})
export class QuizAComponent implements OnInit {
  quiz;
  answer = '';
  id;
  question;
  current;
  finish = false;
  grade = 0;
  pass = 0;
  total_correct = 0;
  total = 0;
  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizAService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getQuizQuestion();
    });
  }
  ngOnInit() { }
  setAnsweer(answer) {
    this.answer = answer;
    console.log(this.answer);
  }

  getQuizQuestion() {
    const question_id = (this.question) ? this.question.id : '';
    const filter = { answeer: this.answer, question_id: question_id };
    this.quizService.getQuizQuestion(this.id, filter).subscribe(
      data => {
        if (data.status === 1) {
          this.question = data.question;
          this.current = data.current;
          this.answer = '';
        } else if (data.status === 2) {
          this.question = null;
          this.finish = true;
          this.grade = data.grade;
          this.pass = data.pass;
          this.total_correct = data.total_correct;
          this.total = data.total;
        }
      },
      error => {
        alert('error');
      }
    );
  }
}
