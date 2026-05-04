export type TrafficUnit = 'per_day' | 'per_month' | 'per_year';
export type LinkType = 'dofollow' | 'nofollow' | 'sponsored' | 'ugc';

export interface PublisherSite {
  id: string;
  created_at: string;
  domain: string;
  site_url: string;
  logo_url: string;
  da: number;
  traffic: string;
  traffic_unit: TrafficUnit;
  link_type: LinkType;
  is_sale: boolean;
  price: number;
  original_price: number | null;
}
