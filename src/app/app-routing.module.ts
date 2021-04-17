import { NgModule} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes:Routes=[
    {
        path:"",//primer componente que se mostraria
        component:PorPaisComponent,
        pathMatch:"full"
    },
    {
        path:"Region",
        component:PorRegionComponent
    },
    {
        path:"Capital",
        component:PorCapitalComponent
    },
    {
        path:"pais/:id", //el nombre que se le coloca es lo que resiviremos en los params
        component:VerPaisComponent
    },
    //excepcion
    {
        path:"**",
        redirectTo:"" 
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
}) 
export class AppRotingModule{

}