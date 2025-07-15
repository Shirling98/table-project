import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TableModule, TableRowSelectEvent  } from 'primeng/table';
import { TableService } from '../../services/table.services';
import { HttpClientModule } from '@angular/common/http';
import { IOrder } from '../../interfaces/tableInterfase';
import { FilterService } from '../../services/filter.service';
import { SidebarModule } from 'primeng/sidebar';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,
    HttpClientModule,
    SidebarModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: []
})
export class TableComponent implements OnInit{
  orders: IOrder[] = [];
  sidebarVisible = false;
  selectedOrder: IOrder | null = null;


constructor(
  private tableServices: TableService,
  private filterServices: FilterService
) {}

ngOnInit(): void {
  this.tableServices.getOrders().subscribe(
    (data) => {
      this.orders = data;
    } 
  );
}

onRowClick(order: IOrder): void {
  this.selectedOrder = order;
  this.sidebarVisible = true;
}

}