import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: string,limit?:number){
    if(value){
    let txt:string;
    txt=value;
    txt='('+txt.substring(0,3)+')'+txt.substring(3,6)+'-'+txt.substring(6,10);
return txt;
    }
    return null;
  }

}
