import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { error } from 'console';
import { CurrentUserService } from 'src/app/modules/shared/services/current-user.service';
@Component({
  selector: 'users-index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private currentUser: CurrentUserService
  ) { }

  public users: User[] = []

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  // onDeleteUser(user: any): void {
  //   const dialogRef = this.dialog.open(DialogComponent)
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.userService.updateUser({ isActive: !user.isActive }, user.id).subscribe(resp => {
  //         this.getUsers()
  //       })
  //     }
  //   })
  // }

  onChangeAdminStatus(user: any): void {
    this.userService.updateUser({ isAdmin: !user.isAdmin }, user.id).subscribe(resp => {
      this.getUsers()
    })
  }

  onChangeActiveStatus(user: any): void {
    this.userService.updateUser({ isActive: !user.isActive }, user.id).subscribe(resp => {
      this.getUsers()
    })
  }
}
