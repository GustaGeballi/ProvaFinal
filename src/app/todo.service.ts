import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoURL =  'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  ObsToDo(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.todoURL);
  }
}
