import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  orderNumber: number = 0;

   private _searchStr$ = new Subject<any>()
   searchStr$ = this._searchStr$.asObservable()

  constructor() { }

  updateFilters(newFilters: any): void {
    this._searchStr$.next(newFilters)
  }

  resetFilters() {
    this._searchStr$.next({});
  }
}
