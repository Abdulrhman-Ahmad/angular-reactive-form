import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[navhover]'
})
export class NavbarhoverDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.transitionDuration = '300ms'
  }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.backgroundColor = '#d10202';
    this.el.nativeElement.style.borderColor = '#d10202';

  }

  @HostListener('mouseout') onMouseOut(){
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.borderColor = null;

  }

}
