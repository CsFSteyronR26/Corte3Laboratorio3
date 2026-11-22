import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../shared/components/button/button';
import { ButtonConfig } from '../../../shared/interfaces/button';
import { AlertService } from '../../../shared/services/alert.service';
import { TableLibros } from '../../components/table-libros/table-libros';
import { Libro } from '../../interfaces/libro';
import { TableLibrosEvents } from '../../interfaces/table-libros';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-list-libros',
  imports: [
    Button,
    TableLibros
  ],
  templateUrl: './list-libro.html',
})
export class ListLibros {

  libros: Libro[] = [];

  createButtonConfig: ButtonConfig = {
    id: 'create-libro-button',
    title: 'Create Libro',
    type: 'primary',
  };

  router = inject(Router);
  libroService = inject(LibroService);
  alertService = inject(AlertService);

  ngOnInit() {
    this.getLibros();
  }

  getLibros(){
    this.libroService.getAll().subscribe({
      next: (libros: Libro[]) => {
        this.libros = libros;
      },
      error: (error: any) => {
        console.error('Error fetching libros:', error);
        this.alertService.toast('Error al consultar los libros', 'error');
      }
    });
  }

  createLibro(){
    this.router.navigateByUrl('/libros/create');
  }

  tableEvents({ id, action }: TableLibrosEvents){
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
    this.router.navigateByUrl(`/libross/detail/${id}`);
  }

  update(id: number){
    this.router.navigateByUrl(`/libros/update/${id}`);
  }

  async delete(id: number){
    const title = '¿Esta seguro?';
    const text = `Se va eliminar el libros ${id}`;
    const confirm = await this.alertService.confirm(title, text);
    if(confirm){
      this.libroService.delete(id).subscribe({
        next: () => {
          this.alertService.toast('Eliminación Exitosa', 'success');
          this.getLibros();
        },
        error: () => {
          this.alertService.toast('Error al eliminar el libro', 'error');
        }
      });
    }

  }

}
