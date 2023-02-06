import { Component, OnDestroy } from '@angular/core';
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
  counter: number = 0;
  timerRef: any;
  running: boolean = false;
  timeText: string = '';
  timeList: string[] = [];
  timeListNums: number[] = [];
  buttonTextList: string[] = Array(30).fill('Check-In');
  counterList: number[] = Array(30).fill(0);

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

  // startTimer(index: number){
  //   this.running = !this.running;
  //   this.buttonTextList[index] = 'Check-In';
  //   if(this.running){
  //     const startTime = Date.now() - (this.counter || 0);
  //     this.timerRef = setInterval(() => {
  //       this.counter = Date.now() - startTime;
  //       this.timeText = this.timeConverter(this.counter);
  //       this.timeList[index] = this.timeText;
  //       this.buttonTextList[index] = 'Check-Out';
  //     });
  //     this.timeListNums[index] = this.counter;
  //     console.log(this.timeListNums);
  //   } else{
  //     this.buttonTextList[index] = 'Check-In';
  //     clearInterval(this.timerRef);
  //   }
  // }

  startTimer(index: number){
    this.running = !this.running;
    this.buttonTextList[index] = 'Check-In';
    if(this.running){
      var counter = this.counterList[index];
      this.timeListNums[index] = counter;
      const startTime = Date.now() - (counter || 0);
      this.timerRef = setInterval(() => {
        counter = Date.now() - startTime;
        this.counterList[index] = counter;
        this.timeText = this.timeConverter(counter);
        this.timeList[index] = this.timeText;
        console.log(index + ": " + this.timeList[index]);
        this.buttonTextList[index] = 'Check-Out';
      });
    } else{
      this.buttonTextList[index] = 'Check-In';
      clearInterval(this.timerRef);
    }
  }

  ngOnDestroy(){
    clearInterval(this.timerRef);
  }
}
