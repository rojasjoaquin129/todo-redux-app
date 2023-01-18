import { Action, createReducer, on } from '@ngrx/store';
import { filtroVariados, setFiltro } from './filtro.actions';
export const inicialState: filtroVariados = filtroVariados.todos;
export const filtroReducer = createReducer<filtroVariados, Action>(inicialState,
  on(setFiltro, (state, { filtro }) => filtro),
)
