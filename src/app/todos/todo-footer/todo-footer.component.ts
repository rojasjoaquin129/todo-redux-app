import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtroVariados, setFiltro } from 'src/app/filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { borrarCompletas } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtroVariados = filtroVariados.completados;
  filtros: filtroVariados[] = [filtroVariados.todos, filtroVariados.completados, filtroVariados.pendientes,];

  pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(store => {
      this.filtroActual = store.filtro;
      this.pendientes = store.todos.filter(todo => todo.completado === false).length;
    })
  }
  cambiarFiltro(filtro: filtroVariados) {
    this.store.dispatch(setFiltro({ filtro }))
  }

  limpiar() {
    this.store.dispatch(borrarCompletas());
  }
}
