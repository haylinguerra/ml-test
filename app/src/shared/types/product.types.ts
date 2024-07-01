export type ProductAuthor = {
    name: string,
    lastname: string,
};

export type ItemPrice = {
    currency: string,
    amount: number,
    decimals: number,
};
export type ProductBreadcrumbs = {
    id: string,
    name: string,
};

type ProductItem = {
    id: string,
    title: string,
    price: ItemPrice,
};

export type ProductDetails = {
    author: ProductAuthor,
    item: ProductItem
    picture: string,
    condition: string,
    sold_quantity: number,
    free_shipping: boolean,
    description: string,
    breadcrumbs: ProductBreadcrumbs[],
};