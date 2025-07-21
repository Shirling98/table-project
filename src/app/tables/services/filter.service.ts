import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private _searchRes$ = new Subject();
  searchRes$ = this._searchRes$.asObservable();

  constructor() { }

  updateResult(data: any)  {
    this._searchRes$.next(data);
  }
}



