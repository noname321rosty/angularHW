import { Component, OnInit } from '@angular/core';
import {Users} from '../model/users';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];
  usersId: string;


  constructor(private activatedRoute: ActivatedRoute  ) {


    activatedRoute.data.subscribe(value => this.users = value.allUsers);
  }


  ngOnInit(): void {

  }


}
