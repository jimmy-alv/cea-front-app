import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule
  ]
})
export class UserModule { }
