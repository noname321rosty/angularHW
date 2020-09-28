import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todos} from '../model/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todos[]>{
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
