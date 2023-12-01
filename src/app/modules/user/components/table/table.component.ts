import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  public users: User[] = []
  public displayedColumns: string [] = [
    'firstName',
    'lastName',
    'email',
    'createdAt',
    'actions'
  ]

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
