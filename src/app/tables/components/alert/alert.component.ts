import { CommonModule } from '@angular/common';
import { AlertService } from './../../services/alert.service';
import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  @Input() delay = 5000

  text: string | undefined
  type = 'success'
  unsub$ = new Subject<void>();

  constructor(private alertServices: AlertService){} 

  ngOnInit(): void {
    this.alertServices.alert$.pipe(takeUntil(this.unsub$))
      .subscribe(alert => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout( () => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
