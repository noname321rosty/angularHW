import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IEmail} from '../model/email';
import {EmailService} from './email.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<IEmail[]>{

  constructor(private emailService: EmailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmail[]> | Promise<IEmail[]> | IEmail[] {
  return this.emailService.getAllEmail();
  }
}
