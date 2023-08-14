import { Component } from '@angular/core';
import { IComment } from 'src/app/shared/comment.interface';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  // Ahora podemos definir el tipo de dato que items debe de ser
  public items: IComment[] = [];
  //para invocar un metodo debemos importar el servicio correspondiente y esto es en el constructor
  constructor(
    private appService: AppService
    // el servicio se puede invocar desde cualquien componente, pero por medio del
    // constructor
  ){
    // aqui en el constructor invocamos la obtencion de datos
    this.load_data();
  }

  //creamos el metodo para invocar nuestro servicio
  load_data(): void {
    // el metodo subscribe asegura que la peticion devuelva un valor y dentro de los
    // parentesis se debe procesar la informacion a ser mostrada y finalmente
    // se asigna a un objeto en este caso items que es de tipo arreglo de comments
    this.appService.get_comments().subscribe(
      (response) => {
        // console.log(response);
        this.items = response;
      }
    );
  }
}

// para poder usar un modelo, podemos usar una clase o una interfaz
// usare una interfaz con unos pocos datos, de este modo evitamos usar any
// en la medida de lo posible debemos evitar el uso de any
