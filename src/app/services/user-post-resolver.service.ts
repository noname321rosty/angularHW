import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IEmail} from '../interface/email';
import {EmailService} from './email.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostResolverService implements Resolve<IEmail[]> {

  constructor(private userPostService: EmailService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmail[]> | Promise<IEmail[]> | IEmail[] {
    const {id} = route.params;
    return this.userPostService.getAllMyPosts(id);
  }
}
