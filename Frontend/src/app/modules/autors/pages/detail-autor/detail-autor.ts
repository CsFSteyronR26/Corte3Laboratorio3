import { CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { Autor } from '../../interfaces/autor';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-detail-autor',
  imports: [Back, CommonModule],
  templateUrl: './detail-autor.html',
})
export class DetailAutor {

  autor: Autor | null = null;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private autorService = inject(AutorService);
  private alertService = inject(AlertService);

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAutor(id);
  }

  getAutor(id: number){
    this.autorService.getById(id).subscribe({
      next: (autor) => {
        this.autor = autor;
      },
      error: (error: any) => {
        console.error('Error fetching autors:', error);
        this.alertService.toast('Error al consultar el usuario', 'error');
        this.router.navigateByUrl('/autors');
      }
    })
  }

}
