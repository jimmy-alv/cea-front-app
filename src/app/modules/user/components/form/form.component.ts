import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { FormValidationService } from "src/app/modules/shared/services/form-validations.service";

@Component({
  selector: 'app-table-users',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public userCreated = false

  public newUserForm: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private userService: UserService, 
    private fb: FormBuilder, 
    private formValidationsService: FormValidationService
  ){}

  public onSaveUser(): void {
    if(this.newUserForm.invalid) return

    console.log(this.newUserForm.value)

    this.userService
      .createUser(this.newUserForm.value)
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