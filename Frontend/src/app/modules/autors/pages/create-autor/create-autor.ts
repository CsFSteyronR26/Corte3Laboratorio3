import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { CreateAutorRequest } from '../../interfaces/autor';
import { AutorService } from '../../services/autor.service';


@Component({
  selector: 'app-create-autor',
  imports: [
    Back, 
    ReactiveFormsModule
  ],
  templateUrl: './create-autor.html',
})
export class CreateAutor {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private alertService = inject(AlertService);
  private autorService = inject(AutorService);

  semesters = Array.from({ length: 10 }, (_, i) => i + 1);

  autorForm = this.fb.group({
    
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    description: ['', Validators.required],
    birthday: ['', Validators.required],
    status: [true]
  });

  createAutor(): void {
    if (this.autorForm.invalid) {
      this.autorForm.markAllAsTouched();
      return;
    }
    const Autor: CreateAutorRequest = {
      name: this.autorForm.value.name!,
      email: this.autorForm.value.email!,
      description: this.autorForm.value.description!,
      birthday: this.autorForm.value.birthday!,
      status: this.autorForm.value.status!
    };
    console.log('Autor para enviar al backend:', Autor);
    this.autorService.create(Autor).subscribe({
      next: () => {
        this.alertService.toast(
          'Autor registrado correctamente',
          'success'
        );
        this.router.navigateByUrl('/autors');
      },
      error: () => {
        this.alertService.toast('Error al crear el autor', 'error');
      }
    })

  }
  
}
