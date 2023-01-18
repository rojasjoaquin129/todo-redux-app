import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, borrarCompletas } from './todo.actions';


export const inicialState: Todo[] = []
export const todoReducer = createReducer(inicialState,
  on(borrarCompletas, (state) => state.filter(todo => todo.completado === false)),
  on(crear, (state, { texto }) => [...state, new Todo(texto)].reverse()),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggle, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completado: !todo.completado };
      } else {
        return todo
      }
    })),
  on(editar, (state, { id, texto }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: texto };
      } else {
        return todo
      }
    })),
  on(toggleAll, (state, { completado }) => state.map((todo) => {
    return { ...todo, completado: completado }
  })
  )
)
