import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent,CommonModule, RouterOutlet,RoomsComponent,ContainerComponent],
  templateUrl: './app.component.html',
  // template:'<h1>Hello world from inline template</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'HotelApp';
  @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  ngAfterViewInit(){
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
}