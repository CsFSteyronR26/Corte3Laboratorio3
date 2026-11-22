import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateAutorRequest, Autor, UpdateAutorRequest } from '../interfaces/autor';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  
  http = inject(HttpClient);
  url = 'http://localhost:3000/api/autors';

  getAll(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.url);
  }

  getById(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.url}/${id}`);
  }

  create(autor: CreateAutorRequest): Observable<Autor> {
    return this.http.post<Autor>(this.url, autor);
  }

  update(id: number, autor: UpdateAutorRequest): Observable<Autor> {
    return this.http.put<Autor>(`${this.url}/${id}`, autor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
