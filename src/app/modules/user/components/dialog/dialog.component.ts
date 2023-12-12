import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'dialog-confirmation', 
  templateUrl: './dialog.component.html', 
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}