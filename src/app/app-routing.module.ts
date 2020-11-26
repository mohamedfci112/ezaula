import { QuizBComponent } from './quiz-b/quiz-b.component';
import { QuizAComponent } from './quiz-a/quiz-a.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { QuizDComponent } from './quiz-d/quiz-d.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { KidsIndexComponent } from './kids/kids-index/kids-index.component';
import { LoginComponent } from 'src/app/access/login/login.component';
import { RegisterComponent } from 'src/app/access/register/register.component';
import { ForgottenComponent } from 'src/app/access/forgotten/forgotten.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-password', component: ForgottenComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'kids', component: KidsIndexComponent
  },
  {
    path: 'quiz-b/:id', component: QuizBComponent
  },
  {
    path: 'quiz-a/:id', component: QuizAComponent
  },
  {
    path: 'quiz-c/:id', component: QuizCComponent
  },
  {
    path: 'quiz-d/:id', component: QuizDComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
