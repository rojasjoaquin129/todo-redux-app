import { Pipe, PipeTransform } from '@angular/core';
import { filtroVariados } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtroVariados) {
    switch (filtro) {
      case filtroVariados.completados:
        return todos.filter(todo => todo.completado);
      case filtroVariados.pendientes:
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
