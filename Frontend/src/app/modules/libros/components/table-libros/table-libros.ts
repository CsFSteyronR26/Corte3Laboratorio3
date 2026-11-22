import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { ButtonConfig } from '../../../shared/interfaces/button';
import { Libro } from '../../interfaces/libro';
import { TableLibrosActions, TableLibrosEvents } from '../../interfaces/table-libros';

@Component({
  selector: 'app-table-libros',
  imports: [Button],
  templateUrl: './table-libros.html',
})
export class TableLibros {

  @Input() libros: Libro[] = [];
  @Output() onClickActions = new EventEmitter<TableLibrosEvents>();

  configDetailButton: ButtonConfig = {
    id: 'detail',
    type: 'primary',
    icon: 'eye',
    outline: true,
    size: 'sm'
  }

  configEditButton: ButtonConfig = {
    id: 'update',
    type: 'warning',
    icon: 'pencil-square',
    outline: true,
    size: 'sm'
  }

  configDeleteButton: ButtonConfig = {
    id: 'delete',
    type: 'danger',
    icon: 'trash',
    outline: true,
    size: 'sm'
  }

  click(id: number, action: TableLibrosActions){
    this.onClickActions.emit({id, action});
  }

}
