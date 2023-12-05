import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'users-index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexPageComponent implements OnInit{
  constructor(private userService: UserService){}

  public users: User[] = []

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
