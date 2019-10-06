import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'console', component: ConsoleComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
