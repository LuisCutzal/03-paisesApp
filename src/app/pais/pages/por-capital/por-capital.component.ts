import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string="";
  existeError:boolean=false;
  paises:Contry[]=[];

  constructor(private paisService:PaisService) { }

  buscar( termino:string){
    this.existeError=false;
    this.termino=termino;
    
    this.paisService.buscarCapital(termino)
    .subscribe((argumento)=>{
      console.log(argumento);
      this.paises=argumento;
    },(err)=>{
      this.existeError=true;
      this.paises=[];
    });
  }

  sugerencias(termino:string){
    this.existeError=false;
  }

}
