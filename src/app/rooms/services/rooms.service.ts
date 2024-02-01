import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [{
    roomType: "Deluxe Room",
    amenities: "Air Conditioner , Free Wifi , TV , Bathroom , Kitchen",
    price: 500,
    photos: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('13-Nov-2023'),
  },
  {
    roomType: "King Room",
    amenities: "Air Conditioner , Free Wifi , TV , Bathroom , Kitchen",
    price: 5000,
    photos: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    checkinTime: new Date('15-Nov-2023'),
    checkoutTime: new Date('17-Nov-2023'),
  }]

  getRooms(){
    return this.roomList;
  }

  constructor() { }
}
