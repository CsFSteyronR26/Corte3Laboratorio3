import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { Autor, UpdateAutorRequest } from '../../interfaces/autor';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-update-autor',
  imports: [
    Back,
    ReactiveFormsModule
  ],
  templateUrl: './update-autor.html',
})
export class UpdateAutor {

  id!: number;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private alertService = inject(AlertService);
  private autorService = inject(AutorService);

  semesters = Array.from({ length: 10 }, (_, i) => i + 1);

  autorForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    description: ['', Validators.required],
    birthdate: ['', Validators.required],
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
    this.getAutor();
  }

  getAutor() {
    this.autorService.getById(this.id).subscribe({
      next: (autor) => {
        this.setValues(autor);
      },
      error: (error: any) => {
        console.error('Error fetching autors:', error);
        this.alertService.toast('Error al consultar el autor', 'error');
        this.goToList();
      }
    })
  }

  setValues(autor: Autor): void {
    this.autorForm.patchValue({
      name: autor.name,
      email: autor.email,
      description: autor.description,
      birthdate: autor.birthday,
      status: autor.status
    });
  }



  updateAutor(): void {
    if (this.autorForm.invalid) {
      this.autorForm.markAllAsTouched();
      return;
    }
    const formValue = this.autorForm .getRawValue();
    const autor: UpdateAutorRequest = {
      name: formValue.name!,
      email: formValue.email!,
      description :formValue.description!,
      birthday: formValue.birthdate!,
      status: formValue.status!
    };

    this.autorService.update(this.id, autor).subscribe({
      next: () => {
        this.alertService.toast(
          'Docente actualizado correctamente',
          'success'
        );
        this.goToList();
      },
      error: (error: any) => {
        console.error('Error updating autor', error);
        this.alertService.toast(
          'Error al actualizar el autor',
          'error'
        );
      }
    });
  }

  goToList() {
    this.router.navigateByUrl('autors');
  }

}
