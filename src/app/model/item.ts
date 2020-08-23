import { ItemVm } from './../view-model/item-vm';

export class Item {
  private id: number;
  private name: string;
  private isDone: boolean;

  constructor(obj: { id: number, name: string, isDone: boolean }) {
    this.id = obj.id;
    this.name = obj.name;
    this.isDone = obj.isDone;
  }

  toggleState() {
    this.isDone = !this.isDone;
  }

  asViewModel(): ItemVm {
    return {
      id: this.id,
      name: this.name,
      isDone: this.isDone
    } as ItemVm;
  }

  match(id: number): boolean {
    return this.id === id;
  }
}
