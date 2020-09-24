import { Component, OnInit } from '@angular/core';
import {IComments} from '../model/comments';
import {ActivatedRoute} from '@angular/router';
import {CommentsService} from '../services/comments.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  comments: IComments[];

  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        const {idPosts} = params;

        this.commentsService.getMyComments(idPosts).subscribe(comments => {
          this.comments = comments;
          // console.log(this.comments);
        });
      });
  }

}
