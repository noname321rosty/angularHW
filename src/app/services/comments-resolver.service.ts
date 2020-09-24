import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IComments} from '../model/comments';
import {CommentsService} from './comments.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService implements Resolve<IComments[]>{

  constructor(private commentsService: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments[]> | Promise<IComments[]> | IComments[] {
    return this.commentsService.getAllComments();
  }

}
