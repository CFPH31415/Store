import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticulosServiceService } from 'src/app/services/articulos-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  articleForm!:FormGroup;

    constructor(private fb:FormBuilder,
      private dialogRef: MatDialogRef<DialogComponent>,
      private artiService:ArticulosServiceService,
      @Inject(MAT_DIALOG_DATA) public data: any) {
      this.articleForm = new FormGroup({
        codigo: new FormControl(),
        descripcion: new FormControl(),
        precio: new FormControl()
      })
    }
    ngOnInit(): void {
      this.articleForm = this.fb.group({
        codigo: ['', [Validators.required]],
        descripcion: ['', [Validators.required, Validators.minLength(3)]],
        precio: ['', [Validators.required]]
      })
    }
  onSubmit(){
    const response = this.artiService.addArticulo(this.articleForm.value)
    console.log(response)
this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close();
  }}
