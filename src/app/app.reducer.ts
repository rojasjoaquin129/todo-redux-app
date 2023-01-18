import { ActionReducerMap } from "@ngrx/store";
import { filtroVariados } from "./filtro/filtro.actions";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/ngrx/todo.reducer";
import { filtroReducer } from './filtro/filtro.reducer';



export interface AppState {
  todos: Todo[],
  filtro: filtroVariados;

}
export const APPSTORE: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
