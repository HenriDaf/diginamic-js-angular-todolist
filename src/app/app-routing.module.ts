import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoeditComponent } from './todolist/todoedit/todoedit.component';




const ROUTES: Routes = [
  { path: 'list', component: TodolistComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'add', component: TodoeditComponent},
  { path: 'edit/:id', component: TodoeditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
