import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addhobby',
  templateUrl: './addhobby.component.html',
  styleUrls: ['./addhobby.component.css']
})
export class AddhobbyComponent {
@Output() mynewhobby = new EventEmitter;
@Output() adddes3 = new EventEmitter;

constructor() { } 

  addhobby(data:any){
    this.mynewhobby.emit(data);
  }

  adddescription(des:any){
    this.adddes3.emit(des);
  }

}
