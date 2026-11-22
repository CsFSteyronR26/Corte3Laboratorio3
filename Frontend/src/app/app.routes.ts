import { Routes } from '@angular/router';
import { ListStudents } from './modules/students/pages/list-students/list-students';
import { CreateStudent } from './modules/students/pages/create-student/create-student';
import { DetailStudent } from './modules/students/pages/detail-student/detail-student';
import { UpdateStudent } from './modules/students/pages/update-student/update-student';
import { ListAutors } from './modules/autors/pages/list-autors/list-autors';
import { CreateAutor } from './modules/autors/pages/create-autor/create-autor';
import { DetailAutor } from './modules/autors/pages/detail-autor/detail-autor';
import { UpdateAutor } from './modules/autors/pages/update-autor/update-autor';
import { ListLibros } from './modules/libros/pages/list-libro/list-libro';
import { CreateLibro } from './modules/libros/pages/create-libro/create-libro';
import { DetailLibro } from './modules/libros/pages/detail-libro/detail-libro';
import { UpdateLibro } from './modules/libros/pages/update-libro/update-libro';

export const routes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: '', redirectTo: 'autors', pathMatch: 'full' },
    { path: '', redirectTo: 'libros', pathMatch: 'full' },
    { 
        path: 'students', 
        children: [
            { path: 'list', component: ListStudents },
            { path: 'create', component: CreateStudent },
            { path: 'update/:id', component: UpdateStudent },
            { path: 'detail/:id', component: DetailStudent },
            { path: '**', redirectTo: 'list' }
        ]
    },
    {
        path: 'autors', 
        children: [
            { path: 'list', component: ListAutors },
            { path: 'create', component: CreateAutor },
            { path: 'update/:id', component: UpdateAutor },
            { path: 'detail/:id', component: DetailAutor },
            { path: '**', redirectTo: 'list' }
        ]
    },
    {
        path: 'libros', 
        children: [
            { path: 'list', component: ListLibros },
            { path: 'create', component: CreateLibro },
            { path: 'update/:id', component: UpdateLibro },
            { path: 'detail/:id', component: DetailLibro },
            { path: '**', redirectTo: 'list' }
        ] 
    },
    
];
