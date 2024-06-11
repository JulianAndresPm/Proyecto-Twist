import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  public viewNavbar: EventEmitter<boolean> = new EventEmitter<boolean>();
  public $modal: EventEmitter<boolean> = new EventEmitter<boolean>();


  intercept( req , next ){

    const token = localStorage.getItem('token')
    const tokenHeader = req.clone({
      setHeaders:{
        auth: `Bearer ${token}`
      }
    });
    return next.handle(tokenHeader);
    
  }
  constructor( private http:HttpClient ) { }

  public getAllProductsCar(){
    const url = `${environment.ApiEndPoint}/carrito`;
    return this.http.get(url);
  }

  public updateProducts(product){
    const url = `${environment.ApiEndPoint}/carUpdate`;
    return this.http.post(url,product);
  }
}
