import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos:any []=[]

    constructor (private todoService : TodoService ) {}

    ngOnInit():void{
      this.todoService.getAll().subscribe((data: any)=>{
          this.todos=data
          console.log(this.todos)
      })
    }
    editTodo(todo: any) {
      // Update the todo item on the server using the TodoService
      this.todoService.update(todo).subscribe(() => {
        // Optionally, you can notify the user that the todo item was updated.
       alert("Todo Updated successfully.")
      });
    }
    deleteTodo(todo: any) {
      // Delete the todo item on the server using the TodoService
      this.todoService.delete(todo.id).subscribe(() => {
        // Optionally, you can notify the user that the todo item was deleted.
        alert("Todo deleted successfully.")
        // Remove the todo item from the local array to update the UI
        this.todos = this.todos.filter(item => item !== todo);
      });
    }
}
