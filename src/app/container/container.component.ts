import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsComponent } from '../rooms/rooms.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [EmployeeComponent,RoomsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}