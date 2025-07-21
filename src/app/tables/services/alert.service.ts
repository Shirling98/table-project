import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlert } from '../interfaces/tableInterfase';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert$ = new Subject<IAlert>()

  success(text: string) {
    this.alert$.next({type: 'success', text})
  }

  warning(text: string) {
    this.alert$.next({type: 'warning', text})
  }

  danger(text: string) {
    return this.alert$.next({type: 'danger', text})
  }
}
