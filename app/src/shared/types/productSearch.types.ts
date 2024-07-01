import { ItemPrice } from "./product.types";

export type ProductSearchItem = {
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: ItemPrice;
    title: string;
};
