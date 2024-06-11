import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/env/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient ) { }


  public getProducts(){
    const url = `${environment.ApiEndPoint}/productos`;
    return this.http.get(url);
  }

  public addProducts(product){
    const url = `${environment.ApiEndPoint}/carrito`;
    return this.http.post(url,product);
  }

 
}
