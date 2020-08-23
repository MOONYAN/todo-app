import { ItemVm } from './view-model/item-vm';
import { TodoService } from './service/todo.service';
import { CreateDialogComponent } from './component/create-dialog/create-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  todos$: Observable<ItemVm[]>;
  completes$: Observable<ItemVm[]>;

  constructor(
    private dialog: MatDialog,
    private todoService: TodoService) {

  }
  ngOnInit(): void {
    const items$ = this.todoService.items$;

    this.todos$ = items$.pipe(
      map(items => items.filter(e => !e.isDone))
    );

    this.completes$ = items$.pipe(
      map(items => items.filter(e => e.isDone))
    );
  }

  createDialog() {
    this.dialog.open(CreateDialogComponent);
  }

  deleteItem(id: number) {
    this.todoService.deleteItem(id);
  }

  toggleItem(id: number) {
    this.todoService.toggleItem(id);
  }
}
