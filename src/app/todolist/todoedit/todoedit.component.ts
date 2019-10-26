import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodolistService } from '../todolist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {

  todo : Todo;

  constructor(private todolistservice: TodolistService,private route : ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('todoId');
if (id == null ){
this.todo = new Todo(0, "");

} else{
this.todo = this.todolistservice.get((parseInt(id)));
}


}

addTodo(){
  if (this.todo.id == 0){
    this.todo.id = this.todolistservice.getNewId();
    this.todolistservice.add(this.todo);
} else {
  this.todolistservice.edit(this.todo);
}

this.router.navigate(['/list']);
} 
  

}

