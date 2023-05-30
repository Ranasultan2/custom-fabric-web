import { Component } from '@angular/core';
import { SignUp } from 'src/data-type';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  loginerror="";
  constructor(private user: UsersService,private router:Router) { }

  ngOnInit(): void { }
  signUp(data: SignUp) {
    this.user.userSignUp(data);
    this.user.signUpError.subscribe((iserror)=>{
      if(iserror){
        this.loginerror="Email is already taken ";

      }
    })
  }
}


