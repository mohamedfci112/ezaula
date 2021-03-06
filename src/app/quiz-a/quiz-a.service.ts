import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizAService {

  private apiUrl = 'http://www.ezaula.com/Backend/api/v1/';

  constructor(public http: HttpClient) { }

  getLanquages(): Observable<any> {
    const url = this.apiUrl + 'languages';
    return this.http.get(url);
  }

  getQuizQuestion($id, filter): Observable<any> {
    const url = this.apiUrl + 'quiz-a/getQuetion/' + $id;
    const postData = new FormData;
    postData.append('answeer', filter.answeer);
    postData.append('question_id', filter.question_id);
    return this.http.post(url, postData);
  }
}
