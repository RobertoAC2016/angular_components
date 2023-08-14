import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from '../comment.interface';

@Injectable({
  providedIn: 'root'
})
// aqui heredaremos el base service para usar las acciones
export class AppService extends BaseService {

  constructor(
    http: HttpClient
  ) {
    super(http);
  }
  // Nuestro metodo para obtener datos
  // IComment[] es un arreglo de comentarios
  get_comments(): Observable<IComment[]> {
    return this.get<IComment[]>("comments");
  }
  // cada metodo en el servicio que invoca un EP de la API debe ser de tipo
  // Observable y dentro de las llaves <>, va el tipo de dato y objeto,
  // puede ser string, boolean u otro como IComment
  // Podemos crear un metodo post pero debera usar parametros
  enviar_datos(data: string): Observable<IComment[]> {
    return this.post<IComment[]>("comments", data);
  }
  // aqui despues del post no fue necesario poner las llaves pero si se puede hacer
  // para ser mas especificos en el tipo de dato que debe regresar la peticion
}
