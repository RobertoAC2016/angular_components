import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private api: string = 'https://jsonplaceholder.typicode.com/posts/1/';
  private headers: any;
  constructor(
    protected http:HttpClient
  ) {
    this.headers = {
      "Content-Type" : "application/json"
    };
  }
  // ahora implementemos las acciones basicas de nuestras peticiones
  protected get<T>(ep: string): Observable<any> {
    return this.http.get<T>(this.api.concat(ep), {headers: this.headers});
  }
  protected post<T>(ep: string, args: Object): Observable<any> {
    return this.http.post<T>(this.api.concat(ep), args, {headers: this.headers});
  }
  protected put<T>(ep: string, args: Object): Observable<any> {
    return this.http.put<T>(this.api.concat(ep), args, {headers: this.headers});
  }
  protected delete<T>(ep: string, args: Object): Observable<any> {
    return this.http.delete<T>(this.api.concat(ep), args);
  }
}

// para poder usar los servicios, angular en el app.modulo hay que importar el modulo http

// ahora vamos a usar un api publica para consultar datos random

// el base service o core, sera la base para poder implementar el servicios u otros servicios
