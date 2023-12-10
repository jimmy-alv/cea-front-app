import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'users-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  @Output()
  changeAdminStatusEvent = new EventEmitter()

  @Output()
  changeActiveStatusEvent = new EventEmitter()

  @Input()
  users: User[] = []

  public displayedColumns: string [] = [
    'firstName',
    'lastName',
    'email',
    'isActive',
    'isAdmin', 
    'createdAt',
    'actions'
  ]

  public isAdmin(user: any){
    this.changeAdminStatusEvent.emit(user)
  }

  public isActive(user: any){
    this.changeActiveStatusEvent.emit(user)
  }
}
