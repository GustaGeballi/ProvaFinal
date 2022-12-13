import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { toDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private toDoUrl= 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient) { }
}
