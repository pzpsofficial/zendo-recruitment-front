import type { TransformKeys } from './generic';

export type OrderStatus = 'pending' | 'completed' | 'canceled';

export interface ApiOrder {
  id: number;
  created_at: string;
  customer_name: string;
  order_number: string;
  status: OrderStatus;
  total_amount: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Order extends TransformKeys<ApiOrder> {}
