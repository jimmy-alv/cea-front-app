import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/modules/shared/services/form-validations.service';
import { CurrentUserService } from 'src/app/modules/shared/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public authenticationFailed = false
  public signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private formValidationService: FormValidationService,
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  isValidField(field: string): boolean | null {
    return this.signInForm.controls[field].errors
      && this.signInForm.controls[field].touched;
  }

  onSignIn(): void {
    if(this.signInForm.invalid) return

    this.authService
      .signIn(this.signInForm.value)
      .subscribe({
        next: (resp) => {
          this.authenticationFailed = false
          localStorage.setItem('currentUser', JSON.stringify(resp.currentUser))
          localStorage.setItem('token', `Bearer ${resp.access_token}`)
          this.currentUserService.loggedUser = resp.currentUser
          console.log(this.currentUserService.loggedUser)
          this.router.navigateByUrl('/home')
        },
        error: (err) => {
          console.log(err)
          this.authenticationFailed = true
        }
      })
  }

  getFieldError(field: string): string | null {
    if (!this.signInForm.controls[field]) return null;
    const validation =  this.formValidationService.validateField(this.signInForm.controls[field])
    return validation!.message
  }
}
