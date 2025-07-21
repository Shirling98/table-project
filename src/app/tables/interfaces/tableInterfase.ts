export enum OrderType {
  Warehouse = 'warehouse',
  Door = 'door',
  Pickup = 'pickup'
}

export interface IOrder {
    numOrder: number,
    typeOfOrder: OrderType,
    isActive: boolean,
    orderContains: string
}

export interface IHttpParams {
  numOrder?: number, 
  isActive?: boolean,
  typeOfOrder?: OrderType
}

export type AlertType = 'success' | 'warning' | 'danger'


export interface IAlert {
  type: AlertType
  text: string
}