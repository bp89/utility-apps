import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './404/404.component';

export const routes: Routes = [
    
    { path: 'calculator', component: CalculatorComponent, title: 'Calculator' },
    { path: 'todo', component: TodoComponent , title: 'Todo List'},
    { path: '**', component: PageNotFoundComponent },
];
