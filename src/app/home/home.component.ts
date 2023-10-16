import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, keyframes } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('clickButtonRegister', [
      transition(':enter', [
        style({
          opacity: 0,
          height: '0px',
          transform: 'translateX(100%)'
        }),
        animate('600ms ease-in-out', style({
          opacity: 1,
          height: '*',
          transform: 'translateX(0)'
        })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({
          opacity: 0,
          height: '0px',
          transform: 'translateX(100%)'
        })),
      ]),
    ]),
    
    trigger('DescriptionLeave', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('600ms ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
      ]),
      
    ]),
  ]
})
export class HomeComponent {
  clickRegisterButton: boolean = false;
  DescriptionLeave: boolean = true;

  constructor() { }

}