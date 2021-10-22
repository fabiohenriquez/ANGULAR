import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jugadores } from './vistas/jugadores';
import { Home } from './vistas/home';
import { Equipos } from './vistas/equipos';
import { Resultados } from './vistas/resultados';
const routes: Routes = [{ path: 'home' , component: Home },
                        { path: 'jugadores' , component: Jugadores },
                        { path: 'equipos' , component: Equipos },
                        { path: 'resultados' , component: Resultados}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
