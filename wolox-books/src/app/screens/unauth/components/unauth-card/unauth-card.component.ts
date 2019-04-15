import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-unauth-card',
  templateUrl: './unauth-card.component.html',
  styleUrls: ['./unauth-card.component.scss']
})
export class UnauthCardComponent implements OnInit {
  @Input() buttonText = 'Button';
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emitEvent() {
    this.onButtonClick.emit();
  }
}
