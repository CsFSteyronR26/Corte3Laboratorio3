import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { CreateLibroRequest } from '../../interfaces/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-create-libro',
  imports: [
    Back, 
    ReactiveFormsModule
  ],
  templateUrl: './create-libro.html',
})
export class CreateLibro {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private alertService = inject(AlertService);
  private libroService = inject(LibroService);

  semesters = Array.from({ length: 10 }, (_, i) => i + 1);

  libroForm = this.fb.group({

    name: ['', Validators.required],
    description: ['', Validators.required],
    editorial: ['', Validators.required],
    status: [true]
  });

  createLibro(): void {
    if (this.libroForm.invalid) {
      this.libroForm.markAllAsTouched();
      return;
    }
    const libro: CreateLibroRequest = {
      name: this.libroForm.value.name!,
      description: this.libroForm.value.description!,
      editorial: this.libroForm.value.editorial!,
      status: this.libroForm.value.status!
    };
    console.log('Aula para enviar al backend:', libro);
    this.libroService.create(libro).subscribe({
      next: () => {
        this.alertService.toast(
          'Aula registrada correctamente',
          'success'
        );
        this.router.navigateByUrl('/classrooms');
      },
      error: () => {
        this.alertService.toast('Error al crear el aula', 'error');
      }
    })

  }
  
}
