import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root',
})
export class TodoService {
 private apiUrl=`http://localhost:8080/Todo`;


  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get(this.apiUrl)
  }

  add(todo:any){
      return this.http.post(this.apiUrl,todo)
  }

  update(todo:any){
    return this.http.patch(`${this.apiUrl}/${todo.id}`,todo)
  }
  
  delete(id:number){
  return this.http.delete(`${this.apiUrl}/${id}`)
  }

  // Implement CRUD methods here:
  // - Create
  // - Read
  // - Update
  // - Delete




}