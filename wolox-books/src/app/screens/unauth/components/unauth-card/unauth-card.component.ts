import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-unauth-card',
  templateUrl: './unauth-card.component.html',
  styleUrls: ['./unauth-card.component.scss']
})
export class UnauthCardComponent {
  @Input() buttonText = 'Button';
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  emitEvent() {
    this.onButtonClick.emit();
  }
}
