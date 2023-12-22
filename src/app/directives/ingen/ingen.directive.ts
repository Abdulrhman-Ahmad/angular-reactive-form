import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIngen]',
  standalone: true
})
export class IngenDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onclick(){
    console.log(this.el.nativeElement)
  }

}
