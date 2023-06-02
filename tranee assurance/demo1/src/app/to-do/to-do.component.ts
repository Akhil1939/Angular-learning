import { Component } from '@angular/core';
import { todoItem } from './to-do.models';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  todoList:Array<todoItem> = [];

  addTodo(item:string){
    this.todoList.push({id:this.todoList.length+1,task:item});
    console.warn(this.todoList);
  }
  deleteTask(id:number){
    this.todoList = this.todoList.filter(todo=>todo.id!=id);
  }

}
