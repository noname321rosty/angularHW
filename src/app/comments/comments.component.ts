import { Component, OnInit } from '@angular/core';
import {IComments} from '../interface/comments';
import {CommentsService} from '../services/comments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComments[];

  // constructor(private commentsService: CommentsService) { }

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute);
    activatedRoute.data.subscribe(value => this.comments = value.allComments);
  }

  ngOnInit(): void {

  //   this.commentsService.getAllComments().subscribe(value => this.comments = value);
  }

}
