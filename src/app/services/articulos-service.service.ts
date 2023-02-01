import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Articulos } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServiceService {

  constructor(private firestore: Firestore) { }
  addArticulo(producto: Articulos) {
    const articuloRef = collection(this.firestore, 'articulos');
    return addDoc(articuloRef, producto);
  }
    getArticulo():Observable<Articulos[]>{
      const articuloRef = collection(this.firestore, 'articulos');
      return collectionData(articuloRef, {idField:'id'}) as Observable<Articulos[]>
    }
  deleteArticulo(articulo: Articulos) {
    const articuloRef = doc(this.firestore, `articulos/${articulo.id}`)
    return deleteDoc(articuloRef);
  }

}
