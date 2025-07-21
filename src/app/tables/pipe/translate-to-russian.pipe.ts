import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateToRussian',
  standalone: true
})
export class TranslateToRussianPipe implements PipeTransform {

  transform(value: 'warehouse' | 'door' | 'pickup'): string {
     const translations: Record<string, string> = {
      warehouse: 'До склада',
      door: 'До двери',
      pickup: 'До ПВЗ',     
    };
    return translations[value] || value;
  }

}
