import { CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { Libro } from '../../interfaces/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-detail-libro',
  imports: [Back, CommonModule],
  templateUrl: './detail-libro.html',
})
export class DetailLibro {

  libro: Libro | null = null;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private libroService = inject(LibroService);
  private alertService = inject(AlertService);

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getLibro(id);
  }

  getLibro(id: number){
    this.libroService.getById(id).subscribe({
      next: (libro) => {
        this.libro = libro;
      },
      error: (error: any) => {
        console.error('Error fetching libros:', error);
        this.alertService.toast('Error al consultar el libro', 'error');
        this.router.navigateByUrl('/libros');
      }
    })
  }

}
