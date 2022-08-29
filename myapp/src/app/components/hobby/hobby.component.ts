import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent {
  @Input() hobarr1:any[] = [];
  @Input() desarr1:any[]=[];
  @Output() deletehobby3 = new EventEmitter;
 @Output() addf = new EventEmitter;
  constructor() { }
  delete(data:number){
    this.deletehobby3.emit(data);
  }

  afav(data:number){
this.addf.emit(data);
  }
  

}
