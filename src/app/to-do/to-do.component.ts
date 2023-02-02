import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  // public items: string[] = [];

  // public newTask!: string;

  // public addToList() {
  //   if (this.newTask == ''){
  //   }
  //   else{
  //     this.items.push(this.newTask);
  //     this.newTask = '';
  //   }
  // }

  // public deleteTask(index: number) {
  //   this.items.splice(index,1);
  // }

  todoList = new FormGroup({
    task: new FormControl(),
    timeEstimation: new FormControl(),
    priority: new FormControl()
  })

  onSubmit(){
    console.log(this.todoList.value);
  }
}
