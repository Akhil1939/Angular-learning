import { Component } from '@angular/core';

@Component({
  selector: 'app-ctp-parent',
  templateUrl: './ctp-parent.component.html',
  styleUrls: ['./ctp-parent.component.css']
})
export class CtpParentComponent {

  data:string="";
updateData(data:string){
this.data=data;
}

}
