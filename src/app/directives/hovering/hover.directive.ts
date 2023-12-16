import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.transitionDuration = '1s'
  }

  @HostListener('mouseover') mouseover(){
    this.el.nativeElement.style.backgroundColor = 'white'
  }

  @HostListener('mouseout') mouseout(){
    this.el.nativeElement.style.backgroundColor = null
  }

}
