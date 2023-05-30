import { Component } from '@angular/core';
import { SignUp,LogIn } from 'src/data-type';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = "";
  constructor(private user:UsersService ){}

  logIn(data:LogIn){

    this.user.userLogIn(data);
    // this.user.logInError.subscribe((iserror)=>{
    //   this.error="Email or Password incorrect ";
    // })
  }
}
