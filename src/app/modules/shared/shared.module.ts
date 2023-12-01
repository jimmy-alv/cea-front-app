import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormValidationService } from './services/form-validations.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule, 
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    FormValidationService, 
    AuthService
  ]
})
export class SharedModule { }
