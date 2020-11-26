import { element } from 'protractor';
import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { QuizBService } from './quiz-b.service';

@Component({
  selector: 'app-quiz-b',
  templateUrl: './quiz-b.component.html',
  styleUrls: ['./quiz-b.component.css']
})
export class QuizBComponent implements AfterViewChecked, OnInit {
  getQuestionParams = {
    img1: '', voice1: '',
    img2: '', voice2: '',
    question_id: 0,
    img3: '', voice3: '',
    img4: '', voice4: ''
  };
  col_A_Element;
  col_B_Element;
  question: {
    id: number,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    text: string,
    url: string,
    voice1: string,
    voice2: string,
    voice3: string,
    voice4: string,
  };
  quiz;
  id;
  current = 0;
  finish = false;
  grade = 0;
  pass = 0;
  total_correct = 0;
  total = 0;
  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizBService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getQuizQuestion();
    });
  }
  ngAfterViewChecked() {
    // console.log(this.sound_2.nativeElement.getBoundingClientRect());
  }
  ngOnInit() { }
  // setAnsweer(answer) {
  //   this.answer = answer;
  //   console.log(this.answer);
  // }
  getColBMatching(x, img: string, id: number) {
    this.col_B_Element = x;
    this.col_B_Element.y = x.nextElementSibling.offsetTop + 25;
    if (this.col_A_Element) {
      this.draw();
      this.col_B_Element.disabled = true;
      this.col_A_Element.disabled = true;
      this.getQuestionParams['img' + id] = this.question[img];
      this.getQuestionParams['voice' + id] = this.question['voice' + this.col_A_Element.voiceId];
      this.getQuestionParams.question_id = this.question.id;
      this.col_A_Element = null;
      this.col_B_Element = null;
    }
  }
  draw() {
    var canvas;
    canvas = document.getElementById('myCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      // const x1 = this.col_A_Boundries.x;
      const y1 = this.col_A_Element.y;
      // const x2 = this.col_B_Boundries.x;
      const y2 = this.col_B_Element.y;
      ctx.moveTo(0, y1);
      ctx.lineTo(250, y2);
      ctx.stroke();
    }
  }
  getColAMatching(x, id: number) {
    this.col_A_Element = x;
    this.col_A_Element.voiceId = id;
    this.col_A_Element.y = x.previousElementSibling.offsetTop + 30;
  }
  nextQuestion() {

  }
  dragStart(event: Event) {
    console.log(event);
  }
  playAudio(audio: HTMLAudioElement) {
    console.log(audio.getBoundingClientRect());
    audio.play();
    if (audio.ended) {
      audio.play();
    }
  }
  getQuizQuestion() {
    this.quizService.getQuizQuestion(this.id, this.getQuestionParams).subscribe(
      data => {
        if (data.status === 1) {
          this.question = data.question;
          this.current = data.current;
          this.total = data.total;
          this.getQuestionParams.question_id = this.question.id;
          this.getQuestionParams.img1 = this.question.img1;
          this.getQuestionParams.img2 = this.question.img2;
          this.getQuestionParams.img3 = this.question.img3;
          this.getQuestionParams.img4 = this.question.img4;
          this.getQuestionParams.voice1 = this.question.voice1;
          this.getQuestionParams.voice2 = this.question.voice2;
          this.getQuestionParams.voice3 = this.question.voice3;
          this.getQuestionParams.voice4 = this.question.voice4;
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
