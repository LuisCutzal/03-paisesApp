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

  buscar(){
    this.existeError=false;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
    .subscribe((argumento)=>{
      console.log(argumento);
      this.paises=argumento;
    },(err)=>{
      this.existeError=true;
      this.paises=[];
    });
  }
}
