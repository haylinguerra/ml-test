
// **** Mercadolibre  **** //

export interface MLRSearchItem {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string | null;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: number | null;
    sale_price: {
      price_id: string;
      amount: number;
      conditions: object;
      currency_id: string;
      exchange_rate: number | null;
      payment_method_prices: unknown[];
      payment_method_type: string;
      regular_amount: number | null;
      type: string;
      metadata: object;
    };
    available_quantity: number;
    official_store_id: number | null;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    variation_filters: string[];
    shipping: {
      store_pick_up: boolean;
      free_shipping: boolean;
      logistic_type: string;
      mode: string;
      tags: unknown[];
      benefits: null;
      promise: null;
      shipping_score: number;
    };
    stop_time: string;
    seller: {
      id: number;
      nickname: string;
    };
    attributes: object[];
    variations_data: {
      [key: string]: object;
    };
    installments: {
      quantity: number;
      amount: number;
      rate: number;
      currency_id: string;
    } | null;
    winner_item_id: null;
    catalog_listing: boolean;
    discounts: null;
    promotions: unknown[];
    inventory_id: null;
  }
  
  export interface MLRItem extends MLRSearchItem {
    deal_ids: number[];
  }
  
  interface ItemSnapshot {
    url: string;
    width: number;
    height: number;
    status: string;
  }
  
  export interface MLRItemDescription {
    plain_text: string;
    last_updated: string;
    date_created: string;
    snapshot: ItemSnapshot;
  
  }
  
  /// **** API - search **** ///
  
  export interface ProductAuthor  {
    name: string,
    lastname: string,
  };
  
  export interface ItemPrice  {
    currency: string,
    amount: number,
    decimals: number,
  };
  export interface ProductBreadcrumbs  {
    id: string,
    name: string,
  };
  
  export interface ProductItem  {
    id: string,
    title: string,
    price: {
      currency: string,
      amount: number,
      decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean, 
  };
  
  export interface ProductSearch  {
    author: ProductAuthor;
    items: ProductItem[];
    breadcrumbs: ProductBreadcrumbs[];
    categories: string[];
  };
  
  
  export interface ProductDetails  {
    author: ProductAuthor,
    item: ProductItem
    picture: string,
    condition: string,
    sold_quantity: number,
    free_shipping: boolean,
    description: string,
    breadcrumbs: ProductBreadcrumbs[],
  };
  
  /// **** API - PDP **** ///