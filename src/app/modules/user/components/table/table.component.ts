import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'users-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  @Input()
  users: User[] = []

  public displayedColumns: string [] = [
    'firstName',
    'lastName',
    'email',
    'createdAt',
    'actions'
  ]
}
