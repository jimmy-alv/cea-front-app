import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'new-user-page',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserPageComponent {

  public userCreated = false

  constructor(
    private userService: UserService,
    private roleService: RoleService
  ) { }


  public saveUser(user: any): any {
    this.userService
      .createUser(user)
      .subscribe({
        next: (resp) => {
          this.userCreated = true
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
}




