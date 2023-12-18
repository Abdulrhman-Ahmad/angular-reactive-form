import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarDirective]',
  standalone: true
})
export class NavbarDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.transitionDuration = '1s'
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = null
  }

}
