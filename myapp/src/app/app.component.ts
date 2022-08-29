import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { count } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
favhobby:any[] =[];
description:any[]=[];
number:any[]=[];
  link="";
  isTrue = false;

//   hobbies = [{name:"",fav:0},
//   {name:"",fav:0}
// ];
hobbies:any[] = [];

  
  email="gmail";
  invalue="";
  isActive=true;
  col=2;
  title = 'myapp';
  pic = "https://dotnettutorials.net/wp-content/uploads/2018/09/word-image-202.png";
  
  test($even:any){
    this.invalue = $even.target.value;
    console.log($even.target.value);
  }

  addHobby($hb:any){
    let obj = {name:$hb,fav:0};
    this.hobbies.unshift(obj);
    
    
  }

  updatelink(data:any){
    this.link = data;
  }

  deleteHobby($dh:any){
    this.hobbies.splice($dh, 1); //1 indicates that only delete one element.

  }

addtofav($event:any){
  this.hobbies[$event].fav = 1;
  this.favhobby = this.hobbies.filter(item=>item.fav==1);
  this.hobbies.splice($event, 1);
}
deleteFav($dh:any){
  let obj = {name:this.favhobby[$dh].name,fav:0};

  this.favhobby.splice($dh, 1); //1 indicates that only delete one element.
  this.hobbies.unshift(obj);
}

adddes($des:any){
  this.description.unshift($des);
}

addnumber($even:any){
  this.number.unshift($even)
}
  }
  

