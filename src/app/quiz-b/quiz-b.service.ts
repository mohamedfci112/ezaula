import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizBService {

  private apiUrl = 'http://ezaula.com/Backend/api/v1/';

  constructor(public http: HttpClient) { }

  getLanquages(): Observable<any> {
    const url = this.apiUrl + 'languages';
    return this.http.get(url);
  }

  getQuizQuestion($id, filter): Observable<any> {
    const url = this.apiUrl + 'quiz-b/getQuetion/' + $id;
    const postData = new FormData;
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        const element = filter[key];
        postData.append(key, element);
      }
    }
    return this.http.post(url, postData);
  }
}
