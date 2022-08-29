import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent  {
  @Input() myfav1:any[] = [];
  @Output() deletefav3 = new EventEmitter;
  constructor() { }

  delete(data:number){
    this.deletefav3.emit(data);
  }

}
