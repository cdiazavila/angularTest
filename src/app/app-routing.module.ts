import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { PaginasComponent } from './components/paginas/paginas.component';
const routes: Routes = [ 
  // { path: '', redirectTo: 'login', pathMatch:'full'},
  // { path: 'login', component: LoginComponent },
  // { path: 'paginas', component: PaginasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
