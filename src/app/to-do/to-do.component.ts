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
  counter: undefined | number = 0;
  timerRef: any;
  running: boolean = false;
  startText: string = 'Check-In';
  timeText: string = '';

  constructor(private fb:FormBuilder){
    this.todoList = this.fb.group({
      task:'',
      timeEstimation: 0,
      priority: ''
    });
  }

  public deleteTask(index: number) {
    this.taskList.splice(index,1);
  }

  onSubmit(){
    console.log(this.todoList.value);
    this.task = this.todoList.get('task')?.value;
    this.taskList.push(this.task);
    console.log(this.taskList);
    this.timeEstimation = this.todoList.get('task')?.value;
    this.priority = this.todoList.get('task')?.value;
  }

  timeConverter(milliseconds: number){
    var hours = Math.round(milliseconds/3600000);
    var minutes = Math.round(milliseconds/60000);
    var seconds = Math.round(milliseconds/1000)
    return hours + ':' + minutes + ':' + seconds;
  }

  startTimer(){
    this.running = !this.running;
    if(this.running){
      this.startText = 'Check-Out';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.timeText = this.timeConverter(this.counter);
      });
    } else{
      this.startText = 'Check-In';
      clearInterval(this.timerRef);
    }
  }

  // ngOnDestroy(){
  //   clearInterval(this.timerRef);
  // }
}
