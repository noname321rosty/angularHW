import {Component, OnInit} from '@angular/core';
import {IComments} from '../model/comments';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentsService} from '../services/comments.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  comments: IComments[];
  userId: string;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private commentsService: CommentsService) {
    this.activatedRoute.params.subscribe(params => {
      const {idPosts} = params;

      const state = this.route.getCurrentNavigation().extras.state;
      if (state){
        this.userId = state.userId;
      }


      this.commentsService.getMyComments(idPosts).subscribe(comments => {
        this.comments = comments;
        // console.log(this.comments);
      });
    });
  }

  ngOnInit(): void {
  }

  navigatePostId(){
    const url = `users/${this.userId}/posts`;
    this.route.navigate([url]);
  }
}
