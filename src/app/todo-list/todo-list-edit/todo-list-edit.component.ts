import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-edit',
  templateUrl: './todo-list-edit.component.html',
  styleUrls: ['./todo-list-edit.component.css']
})
export class TodoListEditComponent implements OnInit {
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }

}
