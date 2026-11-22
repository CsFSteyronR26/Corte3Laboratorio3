import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../shared/components/button/button';
import { ButtonConfig } from '../../../shared/interfaces/button';
import { AlertService } from '../../../shared/services/alert.service';
import { TableAutors} from '../../components/table-autors/table-autors';
import { Autor } from '../../interfaces/autor';
import { TableAutorsEvents } from '../../interfaces/table-autors';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-list-autors',
  imports: [
    Button,
    TableAutors
  ],
  templateUrl: './list-autors.html',
})
export class ListAutors {

  autors: Autor[] = [];

  createButtonConfig: ButtonConfig = {
    id: 'create-autor-button',
    title: 'Create Autor',
    type: 'primary',
  };

  router = inject(Router);
  autorService = inject(AutorService);
  alertService = inject(AlertService);

  ngOnInit() {
    this.getAutors();
  }

  getAutors(){
    this.autorService.getAll().subscribe({
      next: (autors: Autor[]) => {
        this.autors = autors;
      },
      error: (error: any) => {
        console.error('Error fetching autors:', error);
        this.alertService.toast('Error al consultar los autores', 'error');
      }
    });
  }

  createAutor(){
    this.router.navigateByUrl('/autors/create');
  }

  tableEvents({ id, action }: TableAutorsEvents){
    switch(action){
      case 'detail':
        this.viewDetail(id);
        break;
      case 'edit':
        this.update(id);
        break;
      case 'delete':
        this.delete(id);
        break;
    }
  }

  viewDetail(id: number){
    this.router.navigateByUrl(`/autors/detail/${id}`);
  }

  update(id: number){
    this.router.navigateByUrl(`/autors/update/${id}`);
  }

  async delete(id: number){
    const title = '¿Esta seguro?';
    const text = `Se va eliminar el autor ${id}`;
    const confirm = await this.alertService.confirm(title, text);
    if(confirm){
      this.autorService.delete(id).subscribe({
        next: () => {
          this.alertService.toast('Eliminación Exitosa', 'success');
          this.getAutors();
        },
        error: () => {
          this.alertService.toast('Error al eliminar el autor', 'error');
        }
      });
    }

  }

}
