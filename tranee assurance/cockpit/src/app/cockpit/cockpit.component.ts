import { ServerElement } from '../app.models';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

 @Output() serverCreated = new EventEmitter<ServerElement>();
 @Output() blueprintCreated = new EventEmitter<ServerElement>();
 
  newServerName = '';
  newServerContent = '';

  @Input() ServerElements: ServerElement[] = [];

  // onAddServer() {
  //   this.ServerElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.ServerElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
