import { Component } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private appService: AppService
    //ahora para usarlo, debemos crear un metodo en este componente para invocar al menos
    // uno de sus metodos
  ){}

}
