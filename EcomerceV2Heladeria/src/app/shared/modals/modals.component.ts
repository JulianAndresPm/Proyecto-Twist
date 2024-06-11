import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import Swal from 'sweetalert2';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Input() dataCar:any
  public selectedValue:any;
  

  public numbers = [
    { name: 1},
    { name: 2},
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
  ];
  constructor( private tokenInterceptorService: TokenInterceptorService)
  {}

  ngOnInit(): void {
    // this.getProducts();

    console.log(this.dataCar);
    this.precioTotal()
    
  }



  public closeModal(){

    console.log(this.dataCar);
    this.tokenInterceptorService.$modal.emit(false);
  }

  public precioTotal() {
    if (typeof this.dataCar !== 'undefined' && this.dataCar.length > 0) {
      let data = JSON.parse(JSON.stringify(this.dataCar));
      console.log(data);
      
      return data.reduce((total, item) => {
        return total + item['precioxUni'];
      }, 0);
    }
    return 0;
  }

  public swAlert(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu pedido se ha realizado con exito',
      text:'En los proximos 30 a 60 minutos recibiras tu Pedido',
      footer:'Gracias por tu compra',
      showConfirmButton: false,
      timer: 3500
    })
  }

}
