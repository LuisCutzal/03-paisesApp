import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  
  termino:string="";
  existeError:boolean=false;
  
  constructor(private paisService:PaisService) { }

  buscar(){
    this.existeError=false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      console.log(paises);
    },(err)=>{
      this.existeError=true;

    });
  }
}
