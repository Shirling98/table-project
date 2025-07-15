import { Component, OnInit } from '@angular/core';
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
import { IOrder } from '../../interfaces/tableInterfase';


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
  providers: [FilterService]
})
export class FilterComponent {
  orderNumber: number | null = null;

  searchStr: number | null = null;
  checked = true;  
  selectedNodes: any;
  orderTypes: any = [
      {
        key: '0',
        label: 'доставка до склада',
      },
      {
        key: '1',
        label: 'доставка до двери',
      },
      {
        key: '2',
        label: 'доставка до пвз',
      }
  ];

  constructor(
    private filterServices: FilterService
  ){}

}
