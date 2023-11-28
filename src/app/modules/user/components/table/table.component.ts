import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-table-users',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent {
  @Input()
  users: User[] = []
}
