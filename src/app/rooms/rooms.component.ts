import { ChangeDetectionStrategy, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, DoCheck, ViewChild, AfterViewChecked } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

  HotelName: string = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  title: string = "Room List"

  selectRoom!: RoomList;

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 5,
    totalRooms: 15,
  }

  roomList : RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    this.headerComponent.title = "Room View";
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View";
  }

  constructor(private roomsService: RoomsService) {
    this.roomList = this.roomsService.getRooms();
  }

  ngOnInit(): void {
    this.headerComponent.title = "Room View"
    // console.log(this.headerComponent);
  }

  selectedRoom(room: RoomList) {
    this.selectRoom = room;
  }

  addRoom() {
    const newRoom: RoomList = {
      roomType: 'King Room',
      amenities: 'Air Conditioner , Free Wifi , TV , Bathroom , Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('15-Nov-2023'),
      checkoutTime: new Date('21-Nov-2023'),
    };
    this.roomList = [...this.roomList, newRoom];
  }

}