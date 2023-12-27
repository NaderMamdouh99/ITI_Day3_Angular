import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
FormName:string = "";
inputName:string= "";
ArrayTask:string [] = [];
store(msg:any){
    this.FormName = msg.target.value;
}

Print(){
    this.ArrayTask.push(this.FormName);
    this.inputName = " ";
}

Clear(num:any){
  this.ArrayTask.splice(num,1);
}




/* inputTask:string=" ";
FormArray:string[] = [];

AddTask(){
  if (this.inputTask.trim() != " ") {
    this.FormArray.push(this.inputTask);
    this.inputTask = " ";
  }
} */

}
