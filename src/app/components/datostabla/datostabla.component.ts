import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Articulos } from 'src/app/interfaces/interface';
import { ArticulosServiceService } from 'src/app/services/articulos-service.service';
import Swal from 'sweetalert2';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-datostabla',
  templateUrl: './datostabla.component.html',
  styleUrls: ['./datostabla.component.css']
})
export class DatostablaComponent implements OnInit{
  articulo!:Articulos[];

  constructor(private dialog:MatDialog,
    private actiService:ArticulosServiceService){ }
  ngOnInit(): void {
    this.actiService.getArticulo().subscribe( Articulo => {
      this.articulo = Articulo;
    })
  }
  agregarArticulo() {
    this.dialog.open(DialogComponent, {
      data: {}
    });
  }
  onClickDelete(articulo:Articulos){

    Swal.fire({
      title: '¿Desea eliminar el artículo?',
      text: "¡Se eliminará para siempre!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar artículo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const response = this.actiService.deleteArticulo(articulo)
        console.log(response);

        Swal.fire(
          'Artículo eliminado!',
          'Archivo ha sido eliminado.',
          'success'
        )
      }
    })
  }

}
