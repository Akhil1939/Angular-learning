import { Component } from '@angular/core';
import { ServerElement } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cockpit';
  ServerElements: ServerElement[] = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' }
  ];

  onServerAdded(serverData: ServerElement) {
    this.ServerElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: ServerElement) {
    this.ServerElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
