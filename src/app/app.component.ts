import { Component,  Input,  OnInit, ViewChild } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  todos: Todo[] = [];
 
  newTodo!:  String;
  newCheck! : boolean;
  
  ajouter(){
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isComplete = false;
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert('Saiair une tache');
    }
  }

 


  remove(id: number){
    /* `this.todos = this.todos.filter((v, i)=> i !== id);` supprime un élément du tableau `todos` en
    fonction de son index. */
    this.todos = this.todos.filter((v, i)=> i !== id);
  }
}
