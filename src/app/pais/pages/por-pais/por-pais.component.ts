import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent {
  
  termino:string="";
  existeError:boolean=false;
  paises:Contry[]=[];
  paisesSugeridos:Contry[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisService:PaisService) { }

  buscar( termino:string){
    this.mostrarSugerencias=false;
    this.existeError=false;
    this.termino=termino;
    
    this.paisService.buscarPais(termino)
    .subscribe((argumento)=>{ //para consumirlo tengo que suscribirme
      console.log(argumento);
      this.paises=argumento;
    },(err)=>{
      this.existeError=true;
      this.paises=[];
    });
  }

  sugerencias(termino:string){
    this.mostrarSugerencias=true;
    this.existeError=false;
    this.termino=termino;
    this.paisService.buscarPais(termino)
      .subscribe(respuesta=>this.paisesSugeridos=respuesta.splice(0,5),
      (err)=> this.paisesSugeridos=[]
      );
  }

}
