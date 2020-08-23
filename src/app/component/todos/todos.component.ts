import { ItemVm } from './../../view-model/item-vm';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() items: ItemVm[];

  @Output() deleteHandler = new EventEmitter<number>();

  @Output() toggleHandler = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  deleteItem(id: number) {
    this.deleteHandler.emit(id);
  }

  toggleItem(id: number) {
    this.toggleHandler.emit(id);
  }
}
