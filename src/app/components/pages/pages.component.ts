import { Component } from '@angular/core';
import { users } from '../../shared/data';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  // definimos la variable de tipo global y publica ya que sino la hacemos publica no la
  // podremos usar fuera del archivo TS y la necesitaremos en el HTML en su template
  // veamos como es esto, cambiemos a private y vemos q pasa
  // este al ser un objeto como tal no me deja inicializarlo como clase, ya se usa directamente
  // public items = users;
  public items = [];
/**
 * vamos a trabajar con las directivas ngIf y ngFor de angular para la toma de
 * desiciones y ciclos en el html y no es como codigo JS y TS aunque tamben
 * vamos a ver ejemplos en el archivo TS del componente, usaremos pages como
 * nuestro template principal
 * **/
  // generamos el constructor
  constructor(){
    // aqui inicializaremos el objeto dentro de TS para poder ver como se carga un
    // objeto en este archivo con un objeto de tipo array de diferentes elementos

    //con este foreach recorremos cada elemento de la coleccion
    // this.items.forEach((ele) => {
    //   console.log(ele);
    // });
    // vamos a usarlo fuera del TS en el HTML
  }

}
