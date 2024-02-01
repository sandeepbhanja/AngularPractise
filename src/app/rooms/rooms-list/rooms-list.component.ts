import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit,OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectRoom = new EventEmitter<RoomList>();
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  roomSelected(room: RoomList) {
    // console.log("Room Selected");
    this.selectRoom.emit(room);
  }

  hideTable = false;

  toggle() {
    this.hideTable = !this.hideTable;
  }
}