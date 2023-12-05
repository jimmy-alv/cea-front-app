import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-user-page',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserPageComponent implements OnInit {

  @Input('id')
  userId = ''

  public user = {}
  public userSaved = false

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe({
      next: (resp) => {
        console.log(resp)
        this.user = resp
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }

  public editUser(user: any): any {
    this.userService
      .updateUser(user, this.userId)
      .subscribe({
        next: (resp) => {
          console.log(resp)
          this.userSaved = true
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
}




