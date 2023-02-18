import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AltaCertificadoComponent } from './componentes/alta-certificado/alta-certificado.component';
import { AltaProyectoComponent } from './componentes/alta-proyecto/alta-proyecto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'admin', component:AdminComponent},
  { path:'proyecto', component:AltaProyectoComponent},
  { path:'certificado', component:AltaCertificadoComponent},
  { path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
