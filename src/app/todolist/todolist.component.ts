import { Component, OnInit } from '@angular/core';
import { Todos } from './todo.model';
import { TodolistService } from './todolist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: Todos ;

  constructor( private todolistservice: TodolistService, private router: Router) { }

  ngOnInit() {
this.todolist = this.todolistservice.getAll();

  }


  editTodo(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteTodo(id: number) {
    this.todolistservice.delete(id);
    this.todolist = this.todolistservice.getAll();
  }
}
