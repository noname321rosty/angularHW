import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../services/todos.service';
import {Todos} from '../../interface/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[];

  constructor(private todosService: TodosService) {
    this.todosService.getAllTodos().subscribe(
      value => this.todos = value
    );
  }

  ngOnInit(): void {
  }

}
