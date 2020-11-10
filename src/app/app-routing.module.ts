import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'primeiro-componente' , component : DataBindingComponent },
  {path: 'segundo-componente' , component : SegundoComponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
