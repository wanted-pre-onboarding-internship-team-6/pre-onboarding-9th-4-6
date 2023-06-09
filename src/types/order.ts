export interface OrderData {
  totalOrder: number;
  orders: Order[];
}

export interface Order {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}
