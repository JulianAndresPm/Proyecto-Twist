import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public dataProducts:any;
  public Products:Array<object> = new Array<object>();

  public constructor(
    private productsService:ProductosService
  )
  {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.productsService.getProducts().subscribe(
      res => {
        if(res){
          this.dataProducts = res ;
          console.log(this.dataProducts);
        }
      }
    )
  }

  public addProducts(addItem){


    //mensaje agregar al carrito

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'El producto se agrego con exito!'
    })

    //----------------------------------------------------


    const data = {
      id_producto:addItem,
      cantidad:1
    }
    this.productsService.addProducts(data).subscribe(
      res => {

      }
    )

    console.log(addItem);


  }


}
