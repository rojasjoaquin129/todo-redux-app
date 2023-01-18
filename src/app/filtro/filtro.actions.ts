import { createAction, props } from '@ngrx/store';
export enum filtroVariados {
  todos = 'Todos',
  completados = 'Completados',
  pendientes = 'Pendientes'
}
export const setFiltro = createAction('[Filtro] Set Filtro',
  props<{ filtro: filtroVariados }>()
)
