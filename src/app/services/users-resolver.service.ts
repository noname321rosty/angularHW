import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Users} from '../interface/users';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<Users[]> {

  constructor(private usersService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Users[]> | Promise<Users[]> | Users[] {
    // const {id} = route.params;

    //   this.postService.getAllMyPosts(id).subscribe(myPosts => {
    //     this.posts = myPosts;
    //     console.log(this.posts);
    //   });


    return this.usersService.getAllUsers();
  }
}
