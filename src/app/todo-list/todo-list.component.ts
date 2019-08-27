import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todolist=[];
jobName='';

  constructor() { }

  ngOnInit() {
  }
  
  onAddList(event:Event){
    this.jobName = (<HTMLInputElement>event.target).value;
  }
  onAdding(){
    this.todolist.push(this.jobName)
  }

  
}
