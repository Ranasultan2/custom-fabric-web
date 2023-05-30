import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { LogIn, SignUp } from 'src/data-type';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  // for use to reload
  isUserLogIn = new BehaviorSubject<boolean>(false);
  // for use to show error
  signUpError = new EventEmitter<boolean>(false);
  logInError= new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  //####################### Sign up Api called #####################################
  userSignUp(data: SignUp) {
    // cheak the email is already taken or not
    this.http.get(`http://localhost:3000/users?email=${data.email}`, { observe: 'response' }).
      subscribe((result: any) => {
        if (result.body.length == 1 && result && result.body) {
          console.warn("condition_true");
          this.signUpError.emit(true);
        }
        else {
          // if email is not taken then this condition run
          console.warn("condition_false");
          this.http.post('http://localhost:3000/users', data, { observe: 'response' }).subscribe((result) => {

            this.isUserLogIn.next(true);
            localStorage.setItem('user', JSON.stringify(result.body));
            this.router.navigate(['user-home']);

          });
        }
      });
  }
  //####################### Login Api called #####################################
  userLogIn(data: LogIn) {
    // console.warn(data);

    this.http.get(`http://localhost:3000/users?name=${data.email}&password=${data.password}`, { observe: 'response' }).
      subscribe((result: any) => {
        console.warn(result);
        // if (result && result.body && result.body.length) {
        //   console.log(result);
        //   this.isUserLogIn.next(true);
        //   localStorage.setItem('user', JSON.stringify(result.body));
        //   this.router.navigate(['user-home']);
        // }else{
        //   this.logInError.emit(true);
        // }
      });
  }
}
