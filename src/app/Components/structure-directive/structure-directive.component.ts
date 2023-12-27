import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {


  show:boolean= true;
  Ready:boolean= true;
  Product:string[]=[
    "Car",
    "Bus",
    "Bike"
  ]
  Color:string = "redd";
}
