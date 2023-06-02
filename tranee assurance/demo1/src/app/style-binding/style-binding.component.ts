import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
title:string = 'Style Binding';
color:string = 'green';
bgColor:string = 'yellow';

updateColor(){
  this.color = 'red';
  this.bgColor = 'blue';
}


}
