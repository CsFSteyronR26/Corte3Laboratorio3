import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { CreateAutorRequest } from '../../interfaces/autor';
import { AutorService } from '../../services/autor.service';
import { StudentService } from '../../../students/services/student.service';

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

  teacherForm = this.fb.group({
    
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    
    status: [true]
  });

  createTeacher(): void {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
      return;
    }
    const teacher: CreateAutorRequest = {
      name: this.teacherForm.value.name!,
      phone: this.teacherForm.value.phone!,
      email: this.teacherForm.value.email!,
      status: this.teacherForm.value.status!
    };
    console.log('Docente para enviar al backend:', teacher);
    this.teacherService.create(teacher).subscribe({
      next: () => {
        this.alertService.toast(
          'Docente   registrado correctamente',
          'success'
        );
        this.router.navigateByUrl('/teachers');
      },
      error: () => {
        this.alertService.toast('Error al crear el docente', 'error');
      }
    })

  }
  
}
