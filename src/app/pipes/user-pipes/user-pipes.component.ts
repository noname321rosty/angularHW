import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-pipes',
  templateUrl: './user-pipes.component.html',
  styleUrls: ['./user-pipes.component.css']
})
export class UserPipesComponent implements OnInit {
  users = [];

  constructor( private userService: UserService) {
    this.userService.getAllUsers().subscribe(users => this.users = users);

  }

  ngOnInit(): void {
  }

}
