import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";


const routes: Routes = [
  {
    path: '', 
    component: AuthLayoutComponent, 
    children: [
      { path: 'signin', component: SignInComponent},
      { path: '**', redirectTo: 'signin'}
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}