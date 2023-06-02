import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ctp-child',
  templateUrl: './ctp-child.component.html',
  styleUrls: ['./ctp-child.component.css']
})
export class CtpChildComponent {

  @Output() updateDataEvent = new EventEmitter<string>();
  

}
