import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { ButtonConfig } from '../../../shared/interfaces/button';
import { Autor } from '../../interfaces/autor';
import { TableAutorsActions, TableAutorsEvents } from '../../interfaces/table-autors';

@Component({
  selector: 'app-table-autors',
  imports: [Button],
  templateUrl: './table-autors.html',
})
export class TableAutors {

  @Input() autors: Autor[] = [];
  @Output() onClickActions = new EventEmitter<TableAutorsEvents>();

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

  click(id: number, action: TableAutorsActions){
    this.onClickActions.emit({id, action});
  }

}
