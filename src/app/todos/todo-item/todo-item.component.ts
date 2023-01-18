import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { borrar, editar, toggle } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | null = null;
  @ViewChild('inputFisico') txtInputFisico: ElementRef | null = null

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;
  toggle: boolean = false;
  constructor(private store: Store<AppState>) {
    this.chkCompletado = new FormControl(this.todo?.completado);
    this.txtInput = new FormControl(this.todo?.text, Validators.required)
  }

  ngOnInit(): void {
    this.chkCompletado.valueChanges.subscribe(valor => {
      const id = this.todo?.id ? this.todo?.id : 1;
      this.store.dispatch(toggle({ id: id }))
    });
  }

  editar() {
    this.txtInput.setValue(this.todo?.text);
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 1)
  }
  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo?.text) { return; }
    const id = this.todo?.id ? this.todo?.id : 1;
    this.store.dispatch(editar({
      id: id,
      texto: this.txtInput.value
    }))

  }

  borrar() {
    const id = this.todo?.id ? this.todo?.id : 1;
    this.store.dispatch(borrar({ id: id }))
  }
}
