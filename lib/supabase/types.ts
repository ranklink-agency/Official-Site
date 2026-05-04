export type TrafficUnit = 'per_day' | 'per_month' | 'per_year';

export interface PublisherSite {
  id: string;
  created_at: string;
  domain: string;
  site_url: string;
  logo_url: string;
  da: number;
  traffic_value: number;
  traffic_unit: TrafficUnit;
  is_sale: boolean;
  price: number;
  original_price: number | null;
}
