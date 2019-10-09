import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import {SolitudsalaComponent} from './components/solitudsala/solitudsala.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'solitudsala', component: SolitudsalaComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
