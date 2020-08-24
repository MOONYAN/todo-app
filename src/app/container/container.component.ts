import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemVm } from '../view-model/item-vm';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../service/todo.service';
import { map } from 'rxjs/operators';
import { CreateDialogComponent } from '../component/create-dialog/create-dialog.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

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
