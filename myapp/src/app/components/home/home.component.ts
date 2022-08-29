import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
@Input() msg:string = "";
@Input() hobarr:any[] = [];
@Input() myfav:any[]=[];
@Input() desarr:any[]=[];
@Input() number1:any[]=[];
@Output() newhobby = new EventEmitter;
@Output() deletehobby1 = new EventEmitter;
@Output() addfav = new EventEmitter;
@Output() deletefav1 = new EventEmitter;
@Output() adddes1 = new EventEmitter;
@Output() addnumber1 = new EventEmitter;

constructor() { }

  addnewhobby($event:AnyCatcher){
    this.newhobby.emit($event);
    
  }

  deletehobby2($event:any){
    this.deletehobby1.emit($event);
  }

  addtofav($event:any){
    this.addfav.emit($event);
  }

  deletefav2($event:any){
    this.deletefav1.emit($event);
  }

  adddes2($event:any){
    this.adddes1.emit($event);
  }
  addnumber2($event:any){
    this.addnumber1.emit($event);
  }
}
