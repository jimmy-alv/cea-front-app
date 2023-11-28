import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: []
})
export class IndexComponent implements OnInit{

  public users: User[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
