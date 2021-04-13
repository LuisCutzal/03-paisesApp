import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  
  termino:string="";
  existeError:boolean=false;
  paises:Contry[]=[];

  constructor(private paisService:PaisService) { }

  buscar( termino:string){
    this.existeError=false;
    this.termino=termino;
    
    this.paisService.buscarPais(termino)
    .subscribe((argumento)=>{
      console.log(argumento);
      this.paises=argumento;
    },(err)=>{
      this.existeError=true;
      this.paises=[];
    });
  }
}
