import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-unauth-card',
  templateUrl: './unauth-card.component.html',
  styleUrls: ['./unauth-card.component.scss']
})
export class UnauthCardComponent implements OnInit {
  @Input() buttonText: string;
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.buttonText) {
      this.buttonText = 'Button';
    }
  }

  emitEvent() {
    this.onButtonClick.emit();
  }
}
