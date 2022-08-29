import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numberpipe',
  templateUrl: './numberpipe.component.html',
  styleUrls: ['./numberpipe.component.css']
})
export class NumberpipeComponent{

  @Input() number2:any[]=[];
  @Output() addnumber3 = new EventEmitter;
  number ="";
  
  constructor() { }

  num(data:any){
    this.addnumber3.emit(data);
  }

  test(data:string){
    return this.number = data;
  }

}
