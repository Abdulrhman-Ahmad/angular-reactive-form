import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSignuphover]',
  standalone: true
})
export class SignuphoverDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string | null;
  @HostBinding('style.borderColor') borderColor!: string | null;
  @HostBinding('style.transitionDuration') Duration!: string | null;

  constructor(private el: ElementRef) { 
    this.Duration = '300ms'    
  }

  @HostListener('mouseover') onMouseOver(){
    this.backgroundColor = '#d10202';
    this.borderColor = '#d10202'
  }

  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor = null;
    this.borderColor = null;
  }

}
