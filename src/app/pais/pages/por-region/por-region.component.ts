import { Component } from '@angular/core';

import { Contry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`

    button{
      margin-right:5px;
    }

  `
  ]
})
export class PorRegionComponent {

  regiones:string[]=["africa", "americas", "asia", "europe", "oceania"];
  regionActiva:string="";
  paises:Contry[]=[];

  constructor(private paisService:PaisService){}
  
  activarRegion(region:string){
    if(region===this.regionActiva){return;}
    //literalmente igual
    this.regionActiva=region;
    this.paises=[];
    this.paisService.buscarRegion(region)
    .subscribe((argumento)=>{
      //console.log(argumento);
      this.paises=argumento;
    });
  }

  getClaseCss(region:string):string{
    return (region==this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
    //si la region es igual a la region activa regresamos 'btn btn-primary' y si no regresamos 'btn btn-outline-primary'
  }

}
