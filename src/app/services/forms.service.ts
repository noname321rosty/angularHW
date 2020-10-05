import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todos} from '../interface/todos';
import {IForms} from '../interface/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }
                             //User
    getAllForms(id): Observable<IForms> {
      return this.http.get<IForms>(`https://jsonplaceholder.typicode.com/users/${id}`);


  }
}
