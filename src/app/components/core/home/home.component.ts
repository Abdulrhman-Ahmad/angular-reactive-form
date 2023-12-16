import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from 'src/app/directives/hovering/hover.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HoverDirective],
  hostDirectives:[
    {
      directive: HoverDirective
    }
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
