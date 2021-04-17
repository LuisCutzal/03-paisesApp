import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators"; //te permite resivir un observable y regresar un observable
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Contry;

  constructor(
    private activateRoute:ActivatedRoute,
    private PaisService:PaisService
    ) { }//para suscribirse

  ngOnInit(): void { //un buen lugar para suscribirse, es cuando el componente esta inicializado
    /*
    this.activateRoute.params
    .subscribe(params=>{
      console.log(params);
      //se puede colocar de la forma anterior el params o colocarlo como DESESTRUCTURACION DE ARGUMENTOS
      //.subscribe(({id}))=>{
      //  console.log(id);
      //}
      this.PaisService.buscarIdPais(params.id)//es necesario el codigo del params para que este segundo subscribe funcione
      .subscribe(pais=>{
        console.log(pais);
      });
    });
     */

    //usando operadores de RxJ
    this.activateRoute.params
    .pipe(//especificar cualquier cantidad de operadores que trabajaran con el producto del observable: this.activateRoute.params
      switchMap(({id})=>this.PaisService.buscarIdPais(id)), //retorna un observable, se hizo return implicito
//resive el valor del observable anterior y retorna un nuevo observable, ademas se puede usar la desestructuracion de argumentos, como se ve en el codigo anterior
      tap(console.log) //resive el producto del observable y el tap imprime en consola lo que responde
      //tambien puede usarse con una funcion de fleca
      //tap(resp => console.log(resp))
      //tap(resp=>{console.log(resp);})
    )
    //.subscribe(respuesta=>{
    //console.log(respuesta);
    //});
    .subscribe( pais=> this.pais = pais);



  }

}
