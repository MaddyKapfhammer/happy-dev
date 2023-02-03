import { Component } from '@angular/core';
import {NgModule} from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  public todoList: FormGroup;
  task: string = '';
  timeEstimation: Number = 0;
  priority: string = '';
  taskList: string[] = [];

  constructor(private fb:FormBuilder){
    this.todoList = this.fb.group({
      task:'',
      timeEstimation: 0,
      priority: ''
    });
  }

  onSubmit(){
    console.log(this.todoList.value);
    this.task = this.todoList.get('task')?.value;
    this.taskList.push(this.task);
    console.log(this.taskList);
    this.timeEstimation = this.todoList.get('task')?.value;
    this.priority = this.todoList.get('task')?.value;
  }
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

  // todoList = new FormGroup({
  //   task: new FormControl(),
  //   timeEstimation: new FormControl(),
  //   priority: new FormControl()
  // })


}
