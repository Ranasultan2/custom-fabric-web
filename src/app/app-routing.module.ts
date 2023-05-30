import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SingletComponent } from './singlet/singlet.component';
import { ShortsComponent } from './shorts/shorts.component';
import { CompressionComponent } from './compression/compression.component';

import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
}
,
{
  path:'singlet',
  component:SingletComponent
}
,
{
  path:'shorts',
  component:ShortsComponent
}
,
{
  path:'compression',
  component:CompressionComponent
},
{
  path:'user-home',
  component:UserHomeComponent,
  canActivate:[AuthGuard]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
