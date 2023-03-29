import { Component } from '@angular/core';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  productos:any = []
  productosPipe:any = []
  prod:any= []
constructor(private productosService:ProductosService){
// this.productosService.getAll()
// .subscribe(
//  {
//   next:(response:any)=>{
//     console.log(response,'respose')
//     this.productos=response.data
//   },
//   error:(error)=>{
//    console.log(error,'error')
//   }

//  }
// )
// console.log("error",this.productos)
this.productosPipe =  this.productosService.getAllPipe()

console.log('prod',this.productosPipe)
this.init()
}
async init(){
  const response:any = await this.productosService.getAllPromise()
  this.productos=response.data
  console.log('productos',this.productos)

}
}
