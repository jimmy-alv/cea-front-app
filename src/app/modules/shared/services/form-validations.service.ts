import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";


@Injectable({ providedIn: 'root' })
export class FormValidationService {
  public email_format: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  private validations = [
    {
      name: 'pattern', 
      message: 'Formato de correo inválido.'
    }, 
    {
      name: 'required', 
      message: 'Campo requerido.'
    },
    {
      name: 'minlength', 
      message: 'Mínimo 6 caractéres.'
    }
  ]

  validateField(formControl: any) {
    const error = Object.keys(formControl.errors).toString()

    return this.validations.find((validation) => {
      return validation.name == error
    })
  }

  // const errors = this.signInForm.controls[field].errors || {};

    // for (const key of Object.keys(errors)) {
    //   switch (key) {
    //     case 'pattern':
    //       return 'Formato de correo inválido.'
    //     case 'required':
    //       return 'Este campo es requerido';
    //     case 'minlength':
    //       return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
    //   }
    // }

    // return null
}