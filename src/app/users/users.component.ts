import { Component, OnInit } from '@angular/core';
import {Users} from '../model/users';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];

  // constructor(private userService: UserService) { }

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute);
    activatedRoute.data.subscribe(value => this.users = value.allUsers);
  }

  ngOnInit(): void {
  //   this.userService.getAllUsers().subscribe( value => this.users = value);

  }

}
