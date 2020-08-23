import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogComponent>) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('')
    });
  }

  createItem(value: { name: string }): void {
    console.log(value.name);
    if (this.formGroup.valid) {
      this.todoService.createItem(value.name);
      this.dialogRef.close();
    }
  }
}
