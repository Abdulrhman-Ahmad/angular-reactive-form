import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {

  @HostBinding('style.backgrounColor') backgroundColor!: string;
  @HostBinding('style.transitionDuration') Duration!: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.transitionDuration = '300ms'
    
  }

  @HostListener('mouseover') mouseover(){
    this.el.nativeElement.style.backgroundColor = 'white'
  }

  @HostListener('mouseout') mouseout(){
    this.el.nativeElement.style.backgroundColor = null
  }
}
