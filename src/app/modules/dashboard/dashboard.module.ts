import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    MatCardModule    
  ]
})
export class DashboardModule { }
