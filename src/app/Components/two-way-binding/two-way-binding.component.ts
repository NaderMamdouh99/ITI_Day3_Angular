import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  inputMessage:string = "";

  StoreMessage(Msg:any){
    this.inputMessage = Msg.target.value;
  }

  Images:string[]=[
    "assets/Images/1.jpg",
    "assets/Images/2.jpg",
    "assets/Images/3.jpg"
  ]

  Current:number = 0 ;
  CurrentImage:string= this.Images[0];
  SetInter:any;
  Next(){
    this.Current++;
    if (this.Current >= this.Images.length)
      this.Current = 0;
    this.CurrentImage = this.Images[this.Current];
  }
  Pervioes(){
    this.Current--;
    if (this.Current < 0)
      this.Current = this.Images.length - 1;
    this.CurrentImage = this.Images[this.Current];
  }
  Start(){
    this.SetInter = setInterval(()=>{
      this.Next();
    },1000);
  }

  Stop(){
    clearInterval(this.SetInter);
  }


  FormName:string="";
  FormAdress:string="";
  FormAge:number=0;

  PrintData(){
    console.log(this.FormName,this.FormAdress,this.FormAge);
    this.FormName = "";
    this.FormAdress = "";
    this.FormAge = 0;
  }
}

