import { ProductItem, ProductSearch, MLRSearchItem, MLRItem, ProductBreadcrumbs, MLRItemDescription } from '@src/models/types';
import { MLResponse } from '@src/services/ItemsService';
import axios, { AxiosError, HttpStatusCode } from 'axios';

export const formatItem = (item: MLRItem, itemDescription: MLRItemDescription, breadcrumbs: ProductBreadcrumbs[]) => {
  return {
    author: {
      name: 'Angel',
      lastname: 'Hayling'
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: item.price - Math.floor(item.price)
      },
    },
    breadcrumbs,
    picture: item.thumbnail, 
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.deal_ids.length,
    description: itemDescription.plain_text
  }
}

export const formatItems = (data: MLRSearchItem[], breadcrumbs: ProductBreadcrumbs[]): ProductSearch => {
  const items: ProductItem[] = [];
  const categories = new Set<string>();
  data.forEach((item: MLRSearchItem) => {
    items.push({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: item.price - Math.floor(item.price)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping, 
    })
    categories.add(item.category_id);
  });
  return {
      author: {
        name: 'Angel',
        lastname: 'Hayling'
      },
      breadcrumbs,
      categories: Array.from(categories), 
      items: items
    }
}

export const errorHandler = <T>(e: AxiosError): MLResponse<T> => ({
  error: {
      status: e.response?.status || HttpStatusCode.InternalServerError,
      message: e.response?.statusText || 'Internal Error'
  },
  data: null as T
});

export const http = axios.create({
baseURL: 'https://api.mercadolibre.com/sites/MLA'
});

export const httpItem = axios.create({
  baseURL: 'https://api.mercadolibre.com/items'
});

export const httpItemCategory = axios.create({
  baseURL: 'https://api.mercadolibre.com/categories'
});