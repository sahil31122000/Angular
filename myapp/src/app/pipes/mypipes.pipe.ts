import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipes'
})
export class MypipesPipe implements PipeTransform {

  transform(value: string,limit?:number
    ){
    if(value)
    {
      let txt:string;
      txt = value;
      let num = limit?limit:3;

      txt = value.substring(0,num);
      if (value.length>num){
        txt = txt + '...readonly';
        return txt;
      
      }

      return txt;
    }
    return null;

   
  }

}
