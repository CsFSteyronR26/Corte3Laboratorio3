import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { Libro, UpdateLibroRequest } from '../../interfaces/libro';
import { LibroService } from '../../services/libro.service';


@Component({
  selector: 'app-update-libro',
  imports: [
    Back,
    ReactiveFormsModule
  ],
  templateUrl: './update-libro.html',
})
export class UpdateLibro {

  id!: number;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private alertService = inject(AlertService);
  private libroService = inject(LibroService);

  semesters = Array.from({ length: 10 }, (_, i) => i + 1);

  libroForm  = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    editorial: ['', Validators.required],
    status: [true]
  });

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = Number(paramId);
    if (!paramId || !Number.isFinite(this.id) || this.id <= 0) {
      this.alertService.toast('Identificación no válida', 'error');
      this.goToList();
      return;
    }
    this.getLibro();
  }

  getLibro() {
    this.libroService.getById(this.id).subscribe({
      next: (libro) => {
        this.setValues(libro);
      },
      error: (error: any) => {
        console.error('Error fetching classrooms:', error);
        this.alertService.toast('Error al consultar el libro', 'error');
        this.goToList();
      }
    })
  }

  setValues(libro: Libro): void {
    this.libroForm.patchValue({
      name: libro.name,
      description: libro.description,
      editorial: libro.editorial,
      status: libro.status
    });
  }

  private formatDate(value: Date | string): string {
    if (typeof value === 'string') {
      return value.substring(0, 10);
    }
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  updateLibro(): void {
    if (this.libroForm.invalid) {
      this.libroForm.markAllAsTouched();
      return;
    }
    const formValue = this.libroForm.getRawValue();
    const libro: UpdateLibroRequest = {
      name: formValue.name!,
      description: formValue.description!,
      editorial: formValue.editorial!,
      status: formValue.status!
    };

    this.libroService.update(this.id, libro).subscribe({
      next: () => {
        this.alertService.toast(
          'libro actualizado correctamente',
          'success'
        );
        this.goToList();
      },
      error: (error: any) => {
        console.error('Error updating libro:', error);
        this.alertService.toast(
          'Error al actualizar el libro',
          'error'
        );
      }
    });
  }

  goToList() {
    this.router.navigateByUrl('libros');
  }

}
