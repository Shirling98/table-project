import { TableService } from './../../services/table.services';
import { Component, OnDestroy, OnInit, } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'; 
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from "primeng/button";
import { FilterService } from '../../services/filter.service';
import { IHttpParams } from '../../interfaces/tableInterfase';
import { Subject, takeUntil } from 'rxjs';
import { AlertService } from '../../services/alert.service';



@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputNumberModule,
    TreeSelectModule,
    FormsModule,
    ToggleButtonModule,
    ButtonModule,
    ReactiveFormsModule
],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnDestroy{
  formFilters!: FormGroup;
  unsub$ = new Subject<void>();

  orderTypes = [ 
    {value: 'warehouse', label: 'До склада', },
    {value: 'pickup', label: 'До ПВЗ'},
    {value: 'door', label: 'До двери'}, 
    ]

  constructor(private fb: FormBuilder,
    private tableServices: TableService,
    private filterServices: FilterService,
    private alert: AlertService
  ){
    this.formFilters= this.fb.group({
      numOrder: null,
      typeOfOrder: null,
      isActive: null
    })
  }

  onSubmit() {
    const formValues = this.formFilters.value;
    const httpParams: IHttpParams = {
      numOrder: formValues.numOrder ?? undefined,
      isActive: formValues.isActive ?? undefined,
      typeOfOrder: formValues.typeOfOrder?.value ?? undefined
    };
    this.tableServices.getSearch(httpParams).pipe(takeUntil(this.unsub$)).subscribe(
      {
      next:  (data) => {
        this.filterServices.updateResult(data);
        if(data.length === 0) {
          this.alert.warning('Заказ не найден')
        }
      }
    }
  )
  }

  onReset() {
    this.formFilters.reset();
     this.tableServices.getOrders().pipe(takeUntil(this.unsub$)).subscribe({
      next:  (data) => {
        this.filterServices.updateResult(data);
      }
    })
  }


  ngOnDestroy(){
  this.unsub$.next();
  this.unsub$.complete();
}

}
