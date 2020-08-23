import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemVm } from '../view-model/item-vm';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private counter = 0;

  private items: Item[] = [];

  private subject$: Subject<Item[]> = new BehaviorSubject([]);

  constructor() { }

  createItem(name: string): void {

    this.items.push(new Item({
      id: this.counter++,
      name,
      isDone: false
    }));
    this.subject$.next(this.items);
  }

  toggleItem(id: number): void {
    const target = this.items.find(item => item.match(id));
    target.toggleState();
    this.subject$.next(this.items);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => !item.match(id));
    this.subject$.next(this.items);
  }

  get items$(): Observable<ItemVm[]> {
    return this.subject$.pipe(
      map(items => items.map(item => item.asViewModel()))
    );
  }
}
