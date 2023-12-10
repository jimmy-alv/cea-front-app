import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { IndexPageComponent } from './pages/index/index.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserFormComponent } from './components/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'; 
import { UserTemplateComponent } from './pages/template/user-template.component';
import { NewUserPageComponent } from './pages/new/new-user.component';
import { EditUserPageComponent } from './pages/edit/edit-user.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { SharedModule } from '../shared/shared.module';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    IndexPageComponent,
    NewUserPageComponent,
    EditUserPageComponent, 
    TableComponent,
    HeaderComponent, 
    UserFormComponent, 
    UserTemplateComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatSlideToggleModule,
    SharedModule,
    MatDialogModule
  ]
})
export class UserModule { }
