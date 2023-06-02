import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent {

  data:string="";
  logMessage(value:string){
    console.log(value);
    this.data=value;
  }
}
