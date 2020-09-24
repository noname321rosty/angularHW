import { Injectable } from '@angular/core';
import {IComments} from '../model/comments';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentsService} from './comments.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCommentResolverService implements Resolve<IComments[]>{

  constructor(private postCommentService: CommentsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments[]> | Promise<IComments[]> | IComments[] {
    const {idPosts} = route.params;
    return this.postCommentService.getMyComments(idPosts);
  }
}
