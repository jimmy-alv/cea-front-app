import { Location } from "@angular/common";
import { Component, Output, EventEmitter, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'users-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnChanges, OnInit{

  @Output()
  userToSaveEvent = new EventEmitter()

  @Input()
  user = {}

  @Input()
  required = true

  @Input()
  selfEdit = false

  public userCreated = false

  public userForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: [{value: '', disabled: true}],
    password: [''],
    isActive: [true],
    isAdmin: [false]
  })

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    if(this.required){
      this.userForm.controls["email"].addValidators([Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
      this.userForm.controls["password"].addValidators([Validators.required, Validators.minLength(6)])
      this.userForm.controls["email"].enable()
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.patchValue(this.user)
  }

  public onSaveUser(): void {    
    if(this.userForm.invalid) return
    this.userToSaveEvent.emit(this.userForm.value)
  }

  public goBackToPrevPage(): void {
    this.location.back()
  }
}