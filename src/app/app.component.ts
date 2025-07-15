import { Component } from '@angular/core';
import { TableComponent } from './tables/components/table/table.component';
import { FilterComponent } from './tables/components/filter/filter.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TableComponent,
    FilterComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table-project';
}
