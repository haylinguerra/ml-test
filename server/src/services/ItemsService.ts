import { MLRItem, MLRItemDescription, ProductBreadcrumbs } from '@src/models/types';
import { http, httpItem, httpItemCategory, errorHandler } from '../util/misc';
import axios from 'axios';

type ItemResponseType = MLRItem | MLRItemDescription;

export interface ErrorStatus {
    status: number, message: string
}

export type MLResponse<T> = { data: T, error: null | ErrorStatus }

const getItems = async (query: string): Promise<MLResponse<MLRItem[]>> => {
    return await http.get<{ results: MLRItem[] }>('/search', {
        params: {
            q: query,
            limit: 4
        }
    }).then(response => ({ data: response.data.results, error: null }))
    .catch(errorHandler<MLRItem[]>)
};

const getItemCategory = async (id: string): Promise<MLResponse<ProductBreadcrumbs[]>> => {
    return httpItemCategory.get<{ path_from_root: ProductBreadcrumbs[] }>(`/${id}`)
    .then(response => ({ data: response.data.path_from_root, error: null }))
    .catch(errorHandler<ProductBreadcrumbs[]>);
}
const getItem = async (id: string): Promise<MLResponse<ItemResponseType>[]> => {
    return axios.all<MLResponse<ItemResponseType>>([
        httpItem.get<MLRItem>(`/${id}`)
            .then(response => ({ data: response.data, error: null }))
            .catch(errorHandler<MLRItem>),
        httpItem.get<MLRItemDescription>(`/${id}/description`).then(response => ({ data: response.data, error: null }))
            .catch(errorHandler<MLRItemDescription>),
    ]);
}

export default {
    getItems,
    getItemCategory,
    getItem,
} as const;
