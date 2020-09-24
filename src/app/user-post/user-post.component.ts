import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from '../services/email.service';
import {IEmail} from '../model/email';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  posts: IEmail[];

  constructor(private router: ActivatedRoute, private postService: EmailService ) { }

  ngOnInit(): void {



    this.router.params.subscribe(params => {
      const {id} = params;

      this.postService.getAllMyPosts(id).subscribe(myPosts => {
        this.posts = myPosts;
        // console.log(this.posts);
      });
    });
  }

}
