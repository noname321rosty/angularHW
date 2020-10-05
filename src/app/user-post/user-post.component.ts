import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailService} from '../services/email.service';
import {IEmail} from '../interface/email';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  posts: IEmail[];
  usersId: string;

  constructor(private router: ActivatedRoute, private route: Router, private postService: EmailService) {
    this.router.params.subscribe(params => {
      const {id} = params;

      const state = this.route.getCurrentNavigation().extras.state;
      if (state){
        this.usersId = state.userId;
      }

      this.postService.getAllMyPosts(id).subscribe(myPosts => {
        this.posts = myPosts;
        // console.log(this.posts);
      });
    });
  }

  ngOnInit(): void {
  }

  NavigateUserId(){
    const url = 'users/';
    this.route.navigate([url]);
  }
}
