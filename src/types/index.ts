export interface DataProps {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
  slice?: any;
}

export interface StatusProps {
  status?: boolean;
}

export interface PageProps {
  active?: boolean;
  disabled?: boolean;
}
