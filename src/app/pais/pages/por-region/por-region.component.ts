import { Component } from '@angular/core';

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

  activarRegion(region:string){
    this.regionActiva=region;

  }

  getClaseCss(region:string):string{
    return (region==this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
    //si la region es igual a la region activa regresamos 'btn btn-primary' y si no regresamos 'btn btn-outline-primary'
  }

}
