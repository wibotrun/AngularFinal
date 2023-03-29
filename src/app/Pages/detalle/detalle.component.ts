import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  uuid:string
  campeon:any
  habilidades:any
constructor(
  private activateRoute: ActivatedRoute,
  private productosService :ProductosService
){
  this.uuid = this.activateRoute.snapshot.paramMap.get("uuid")||""
  this.init()
}
async init(){
try{
const champ = await this.productosService.getById(this.uuid)
console.log('campeon',champ)
this.campeon = {...champ}

}
catch(e){
  console.log(e,'error')
}
}

}
