import { Component, Input } from "@angular/core";
import { Location } from '@angular/common'

@Component({
  selector: 'app-card-notifier', 
  templateUrl: './card-notifier.component.html', 
  styleUrls: ['./card-notifier.component.css']
})
export class CardNotifierComponent {
  @Input()
  public message = ''

  constructor(private location: Location){}

  goBackToPrevPage(): void {
    this.location.back()
  }
}