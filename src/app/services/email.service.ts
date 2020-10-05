import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IEmail} from '../interface/email';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  getAllEmail(): Observable<IEmail[]>{
    return this.httpClient.get<IEmail[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getAllMyPosts(id: string): Observable<IEmail[]>{
    return this.httpClient.get<IEmail[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
