import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Users} from '../../interface/users';
import {FormsService} from '../../services/forms.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit {
  idS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  users: Users[];
  user: Users;
  userId: any;

  userForm: FormGroup;

  constructor(private router: ActivatedRoute, private formService: FormsService, private formBuilder: FormBuilder) {
    router.data.subscribe(value => this.users = value.allUsers);
  }

  ngOnInit(): void {}




  getUser(): void {
    // console.log(this.userId);

    this.formService.getAllForms(this.userId).subscribe(user => {
      this.user = user;
      this.userForm =  this.formBuilder.group({
        id: [this.user.id, [Validators.required]],
        name: [this.user.name, [Validators.required ]],
        email: [this.user.email,  [Validators.required]],
        phone: [this.user.phone, [Validators.required]]
      });
    });
  }

  check(): void{
    console.log(this.user);
  }


}
