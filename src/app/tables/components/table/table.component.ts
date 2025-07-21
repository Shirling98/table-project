import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule  } from 'primeng/table';
import { TableService } from '../../services/table.services';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { IOrder } from '../../interfaces/tableInterfase';
import { FilterService } from '../../services/filter.service';
import { SidebarModule } from 'primeng/sidebar';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { TranslateToRussianPipe } from '../../pipe/translate-to-russian.pipe';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,
    HttpClientModule,
    SidebarModule,
    TranslateToRussianPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: []
})
export class TableComponent implements OnInit, OnDestroy{
  orders: IOrder[] = [];
  sidebarVisible = false;
  selectedOrder: IOrder | null = null;
  unsub$ = new Subject<void>();


constructor(
  private tableServices: TableService,
  private filterServices: FilterService,
  private alert: AlertService
) {}

ngOnInit(): void {
  this.getOrders();
  this.filterServices.searchRes$
    .pipe(
      takeUntil(this.unsub$))
    .subscribe({
      next: (data) => {
        this.orders = data  as IOrder[]
    }
  })
  }


getOrders() {
   this.tableServices.getOrders().pipe(takeUntil(this.unsub$)).subscribe(
    (data) => {
      this.orders = data;
    } 
  );
}


onRowClick(order: IOrder): void {
  this.selectedOrder = order;
  this.sidebarVisible = true;
}
 
  

ngOnDestroy(){
  this.unsub$.next();
  this.unsub$.complete();
}

}