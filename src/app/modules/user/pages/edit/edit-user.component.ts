import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Observable, of } from 'rxjs';

export interface Role {
  id: string;
  name: string
}

@Component({
  selector: 'edit-user-page',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserPageComponent implements OnInit, OnChanges {

  @Input('id')
  userId = ''

  @Input('self')
  selfEdit = false

  public user: any
  public userSaved = false

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUser(this.userId)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getUser(this.userId)
  }

  public editUser(user: any): any {
    this.userService
      .updateUser(user, this.userId)
      .subscribe({
        next: (resp) => {
          this.userSaved = true
        },
        error: (err) => {
          console.log(err.error.message)
        }
      })
  }

  private getUser(id: any): void {
    this.userService.getUser(this.userId).subscribe({
      next: (resp) => {
        this.user = resp
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}




