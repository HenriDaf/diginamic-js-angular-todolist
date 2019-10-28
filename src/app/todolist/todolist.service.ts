import { Injectable } from '@angular/core';
import { Todos, Todo } from './todo.model';
import { NgForOf } from '@angular/common';
import { element } from 'protractor';
import { ninvoke } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todolist: Todos = [];

  constructor() { }

getAll(): Todos{
  return this.todolist;
}

get(id: number): Todo {
   return this.todolist.reduce((result, i) => i.id == id ? i : result);
 }

getNewId(): number {
  return this.todolist.reduce( (result, i) => (result < i.id ? i.id : result), 0) +1 ;
}


add(todo: Todo) {
  this.todolist.push(todo)
}

edit(todo: Todo) {
  if(this.get(todo.id) != null){
    this.get(todo.id).label = todo.label;
  }
 
}
delete(id: number) {
this.todolist = this.todolist.filter(i => i.id != id)
}





}


