import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirDirective]'
})
export class MydirDirectiveDirective {
  @Input() appMydirDirective:any;

  constructor(private el:ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    
  }
   @HostListener('blur') onblur(){
    let val:string = this.el.nativeElement.value;
    if (this.appMydirDirective=="uppercase")
    this.el.nativeElement.value = val.toUpperCase();
    else
    this.el.nativeElement.value = val.toLocaleLowerCase();
  
   }
}
