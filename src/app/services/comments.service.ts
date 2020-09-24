import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComments} from '../model/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllComments(): Observable<IComments[]> {
    return this.httpClient.get<IComments[]>('https://jsonplaceholder.typicode.com/comments');

  }
  getMyComments(idpost: string): Observable<IComments[]>{
    return this.httpClient.get<IComments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${idpost}`);
  }
}
