import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { IHttpParams, IOrder } from '../interfaces/tableInterfase';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  url = 'http://localhost:3000/orders';

  constructor(
   private http: HttpClient
  ) {}

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.url)
  }

  getSearch(httpParams: IHttpParams): Observable<IOrder[]> {
    
      let params = new HttpParams();

    if(httpParams.numOrder !== null && httpParams.numOrder !== undefined) {
      params  = params.append('numOrder', httpParams.numOrder.toString());
    }

    if(httpParams.isActive !== null && httpParams.isActive !== undefined) {
      params  = params.append('isActive', httpParams.isActive.toString());
    }

    if (httpParams.typeOfOrder !== null && httpParams.typeOfOrder !== undefined) {
    params = params.append('typeOfOrder', httpParams.typeOfOrder.toString());
  }


    if(params.keys().length === 0) {
      return this.getOrders()
    }

    return this.http.get<IOrder[]>(this.url, {params})
  }

}
  
