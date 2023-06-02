import { Component } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {

  userData:any = {};
  GetData(data:any){
    console.log('getData() called');
    console.log(data)
    this.userData = data;
  }
}
