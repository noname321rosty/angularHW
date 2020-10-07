import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularHW';

  users = [];
  text = '';
  showList = false;
  showEmail = false;
  showAdress = false;

  constructor(private  userService: UserService) {
    this.userService.getAllUsers().subscribe(users => this.users = users);

  }

  check(): void {
    this.showList = !this.showList;
  }

  email(): void {
    this.showEmail = !this.showEmail;
  }

  address(): void {
    this.showAdress = !this.showAdress;
  }

}
