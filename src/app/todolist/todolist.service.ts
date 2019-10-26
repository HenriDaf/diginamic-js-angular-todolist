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

get(id: number): Todo{

  this.todolist.forEach(function(ele){
if (ele.id == id){
  return ele;
}

  })
  return null;

}

getNewId(): number {
  return this.todolist.reduce( (result, i) => (result < i.id ? i.id : result), 0) +1 ;
}


add(todo: Todo): void{
  this.todolist.push(todo)
}

edit(todo: Todo) : void{
  this.get(todo.id).label = todo.label;
}
delete(id: number) : void{
this.todolist = this.todolist.filter(i => i.id != id)
}





}


