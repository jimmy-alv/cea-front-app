import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'new-user-page',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserPageComponent {

  constructor(
    private userService: UserService
  ) { }

  userCreated = false

  public saveUser(user: any): any {
    console.log("Save user")
    this.userService
      .createUser(user)
      .subscribe({
        next: (resp) => {
          console.log(resp)
          this.userCreated = true
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
}




