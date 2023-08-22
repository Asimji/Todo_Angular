import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: any = {};
  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }
  saveTodo() {
    if (this.todo && this.todo.description) {
      this.todoService.add(this.todo).subscribe((response: any) => {
        // If the POST request is successful, reset the form and any validation messages.
        this.todo = {};
        // Optionally, you can notify the user that the todo item was successfully added.
        alert("Todo added successfully")
      }, (error) => {
        // Handle any errors that occur during the POST request.
        console.error('Error adding todo:', error);
      });
    } else {
      // Handle validation errors here, e.g., show an error message.
      console.error('Please fill in all fields.');
    }
  }
 
  
}
