import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IComments} from '../model/comments';
import {EmailService} from '../services/email.service';
import {CommentsService} from '../services/comments.service';

@Component({
  selector: 'app-email-comments',
  templateUrl: './email-comments.component.html',
  styleUrls: ['./email-comments.component.css']
})
export class EmailCommentsComponent implements OnInit {

  comments: IComments[];


  constructor(private route: ActivatedRoute, private router: Router, private commentsService: CommentsService) {
    this.route.params.subscribe(params => {
      const object = this.router.getCurrentNavigation().extras.state;

      if (object) {
        const {postId} = object;
        this.commentsService.getMyComments(postId).subscribe(comments => {
          this.comments = comments;
        });
      }

    });

    }


  ngOnInit(): void {

  }


}
