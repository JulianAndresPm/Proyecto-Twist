import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public viewUser:boolean = false;
  public viewModal:boolean = false;
  public dataCar:any;

  public constructor(
    private authService:AuthService,
    private router:Router,
    private tokenInterceptorSercice:TokenInterceptorService
  ){}

  ngOnInit(): void {

    this.validUser();
    this.tokenInterceptorSercice.viewNavbar.subscribe(
      res => {
        console.log(res);
        this.viewUser = res;
      }
    )
    this.tokenInterceptorSercice.$modal.subscribe(
      res =>{
        this.viewModal = res;
      }
    )
  }

  public validUser(){
    const token = localStorage.getItem('token');
    if(token) this.viewUser = true;
  }

  public openModal(){
    this.viewModal = true;
    this.tokenInterceptorSercice.getAllProductsCar().subscribe(
      
      res => {
        this.dataCar = res;
        console.log(this.dataCar);
      }
    )
  }


  public singOut(){
    this.viewUser = false
    localStorage.removeItem('token');
    this.router.navigate(['/']);

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
      title: 'Gracias por visitarnos, vuelve pronto!',
      footer:'Sesion cerrada con exito'
    })
  }
}
