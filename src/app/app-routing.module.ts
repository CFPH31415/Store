import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatostablaComponent } from './components/datostabla/datostabla.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [

  { path:'tabla', component:DatostablaComponent },
  { path:'dialogo', component:DialogComponent },
  { path:'', redirectTo:'tabla', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
