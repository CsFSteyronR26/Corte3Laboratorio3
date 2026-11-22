import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateLibroRequest, Libro, UpdateLibroRequest } from '../interfaces/libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  
  http = inject(HttpClient);
  url = 'http://localhost:3000/api/libros';

  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url);
  }

  getById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.url}/${id}`);
  }

  create(libro: CreateLibroRequest): Observable<Libro> {
    return this.http.post<Libro>(this.url, libro);
  }

  update(id: number, libro: UpdateLibroRequest): Observable<Libro> {
    return this.http.put<Libro>(`${this.url}/${id}`, libro);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
