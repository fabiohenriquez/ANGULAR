import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {


  }


  //get equipos
  getEquipos(): Observable<any>{
    return this.http.get(this.url + "/test", {responseType: 'json'});

    /**
     * return this.http.get(this.url + "/test", {params: payload, responseType: 'json'});
     * Este params, usualmente es para trabajar con objetos.
     * 
     * De esta manera no ocupas colocar en la ruta del backend así: rutas.get('/:id',(req,res)=>{})
     * Si no, solo: rutas.get('/get_teams', (req, res)=>{
     * Luego solo llamamos el parámetro: req.query.id, así no tenemos /:variable1/:variable2/:variable3  
     * 
     */

  }
}
