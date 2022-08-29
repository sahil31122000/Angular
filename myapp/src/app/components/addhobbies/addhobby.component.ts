import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addhobby',
  templateUrl: './addhobby.component.html',
  styleUrls: ['./addhobby.component.css']
})
export class AddhobbyComponent {
@Output() mynewhobby = new EventEmitter;
  constructor() { } 

  addhobby(data:string){
    this.mynewhobby.emit(data);
  }

}
