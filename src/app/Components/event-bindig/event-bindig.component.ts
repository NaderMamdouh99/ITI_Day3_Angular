import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-bindig',
  templateUrl: './event-bindig.component.html',
  styleUrls: ['./event-bindig.component.css']
})
export class EventBindigComponent {


  printmessage(msg:string) {
    console.log("Event print => " + msg);
  }
  printmessage2(event:any){
    console.log(event.target);
    let Element = event.target;
    Element.innerHtMl = "Clicked";
  }

  divp:string="";
  printmessage3(par:any){
    console.log(par);
    par.innerHtMl = "Wellcom Nader Mamdouh";
    console.log(this.ElementDiv);
    this.ElementDiv.nativeElement.innerHtMl ="Nader Please Try";
  }


  @ViewChild('DivEl') ElementDiv:any;
}
