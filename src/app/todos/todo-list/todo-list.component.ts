import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtroVariados } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroVariado: filtroVariados = filtroVariados.todos;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(store => {
      this.todos = store.todos;
      this.filtroVariado = store.filtro
    })
  }

}
