import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
data:any={
  name:"Angular",
  age:20098,
  salary:10000,
  dob:new Date("1999-08-08"),
  percentage:0.5

}
}
