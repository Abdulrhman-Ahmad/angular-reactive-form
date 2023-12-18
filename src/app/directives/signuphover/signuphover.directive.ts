import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSignuphover]',
  standalone: true
})
export class SignuphoverDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.transitionDuration = '200ms'
  }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.backgroundColor = '#d10202';
    this.el.nativeElement.style.borderColor = '#d10202'
  }

  @HostListener('mouseout') onMouseOut(){
    this.el.nativeElement.style.backgroundColor = null;

  }

}
