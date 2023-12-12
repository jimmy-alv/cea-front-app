import { Location } from "@angular/common";
import { Component, Output, EventEmitter, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, DoCheck, AfterViewChecked } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Role } from "../../pages/edit/edit-user.component";
import { RoleService } from "../../services/role.service";

@Component({
  selector: 'users-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnChanges, OnInit {

  @Output()
  userToSaveEvent = new EventEmitter()

  @Input()
  user: any

  @Input()
  required = true

  @Input()
  selfEdit = false

  public roles: any[] = []
  public userCreated = false

  public userForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: [{ value: '', disabled: true }],
    password: [''],
    roles: [[]],
    isActive: [true],
    isAdmin: [false]
  })

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private roleService: RoleService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.patchValue(this.user)
  }

  ngOnInit(): void {
    if (this.required) {
      this.userForm.controls["email"].addValidators([Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
      this.userForm.controls["password"].addValidators([Validators.required, Validators.minLength(6)])
      this.userForm.controls["email"].enable()
    }

    this.roleService.getRoles().subscribe({
      next: (resp) => {
        resp.forEach((role) => {
          if (this.user) {
            const roleIncluded = this.user.roles.find((userRole: any) => { return userRole.id === role.id })
            role['selected'] = roleIncluded ? true : false
          }
          this.roles.push(role)
        })
      }
    })
  }

  public onSaveUser(): void {
    if (this.userForm.invalid) return
    this.userToSaveEvent.emit(this.userForm.value)
  }

  public goBackToPrevPage(): void {
    this.location.back()
  }

  public onAddRole(id: string, name: string): void {
    const role = {id, name}
    const roleIndex = this.userForm.controls["roles"].value.findIndex( (roleForm: any) => { return roleForm.id == role.id })
    roleIndex < 0 ? this.userForm.controls["roles"].value.push(role) : this.userForm.controls["roles"].value.splice(roleIndex, 1)
  }
}