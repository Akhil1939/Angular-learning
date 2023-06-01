import { Component, Input } from '@angular/core';
import { ServerElement } from '../app.models';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  @Input() serverElement: ServerElement = { type: '', name: '', content: '' }; 
}
