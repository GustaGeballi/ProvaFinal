import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: ToDo[]=[];

  constructor(private todoService: TodoService){ }

  ngOnInit(): void{

  }
}
