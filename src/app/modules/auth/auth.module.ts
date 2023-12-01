import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SignInComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ]
})
export class AuthModule { }
