import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activateRoute:ActivatedRoute,
    private PaisService:PaisService
    ) { }//para suscribirse

  ngOnInit(): void { //un buen lugar para suscribirse, es cuando el componente esta inicializado
    this.activateRoute.params
    .subscribe(params=>{
      console.log(params);
      /*se puede colocar de la forma anterior el params o colocarlo como
      .subscribe(({id}))=>{
        console.log(id);
      } */
      this.PaisService.buscarIdPais(params.id)//es necesario el codigo del params para que este segundo subscribe funcione
      .subscribe(pais=>{
        console.log(pais);
      });
    });
  }

}
