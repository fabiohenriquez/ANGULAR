import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Componentes/Encabezado/app.component';
import { Main } from './Componentes/Main/Main';
import { SidebarComponent } from './Componentes/sidebar/sidebarC';

import { Home } from './vistas/home';
import { Jugadores } from './vistas/jugadores';
import { Equipos } from './vistas/equipos';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule} from '@angular/material/Tabs';
import { MatInputModule} from '@angular/material/Input';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    Main,
    SidebarComponent,
    Equipos,
    Jugadores,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [Main]
})
export class AppModule { }
