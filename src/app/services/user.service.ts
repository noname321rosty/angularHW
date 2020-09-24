
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Users} from '../model/users';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]>{
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }

}

