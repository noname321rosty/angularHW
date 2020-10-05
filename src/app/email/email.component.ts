import { Component, OnInit } from '@angular/core';
import {IEmail} from '../interface/email';
import {EmailService} from '../services/email.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email: IEmail[];

  // constructor(private emailService: EmailService) { }

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute);
    activatedRoute.data.subscribe(value => this.email = value.allEmails);
  }

  ngOnInit(): void {
  //   this.emailService.getAllEmail().subscribe(value => this.email = value);
  }

}
