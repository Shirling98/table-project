import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { IOrder } from '../interfaces/tableInterfase';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  url = 'http://localhost:3000/orders';

  constructor(
   private http: HttpClient
  ) {}

  getOrders(): Observable<IOrder[]> {
    console.log('getorders' + this.http.get<IOrder[]>(this.url))
    return this.http.get<IOrder[]>(this.url);
  }

}
