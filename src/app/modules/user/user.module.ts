import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './components/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    HeaderComponent, 
    FormComponent
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
    ReactiveFormsModule
  ]
})
export class UserModule { }
