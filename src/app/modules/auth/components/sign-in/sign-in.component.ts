import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.css']
})
export class SignInComponent {

  public signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  onSignIn(): void {
    if(this.signInForm.invalid){

    }

    // this.authService.signIn(this.signInForm.value).subscribe( resp => {
    //   if(resp.length == 0) {
    //     console.log('failed authentication')
    //     return
    //   }
    //   localStorage.setItem('token', `Bearer ${resp.access_token}`)
      
    //   this.router.navigateByUrl('/users')
    // })
  }

  validateForm(): void {
    console.log(this.signInForm.invalid)
  }
}
