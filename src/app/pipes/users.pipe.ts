import {Pipe, PipeTransform} from '@angular/core';

import {Users} from '../interface/users';

@Pipe({
  name: 'usersPipe'
})

export class UsersPipe implements PipeTransform {

  transform(value: Users[], ...args: any): any {
    let changedUsers;

    value.forEach(user => {
      changedUsers += `<div>
                      <h2>${user.id}  ${user.name}</h2>
                      <p> phone:${user.phone} </p>
                      <p> email:${user.email} </p>
                      </div>`;
    });

    return changedUsers;

  }

}
