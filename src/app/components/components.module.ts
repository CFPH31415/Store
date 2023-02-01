import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatostablaComponent } from './datostabla/datostabla.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DatostablaComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    DatostablaComponent
  ]
})
export class ComponentsModule { }
