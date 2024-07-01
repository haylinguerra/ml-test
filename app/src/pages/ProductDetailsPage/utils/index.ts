    import { ProductDetails } from '../../../shared/types/product.types';

export const getMockedItem = (): ProductDetails => {
    return {
        author: {
        name: "John",
        lastname: "Doe"
        },
        item: {
            id: "abc123",
            title: "Deco reverse sombrero Oxford",
            price: {
                currency: "$",
                amount: 1.293,
                decimals: 0o0
            },
        },
        picture: "https://media.saltlife.com/media/catalog/product/s/a/salt-life_rod-and-gun-club-trucker-mens-hat_slm20283_dark-olive_front_1.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg",
        condition: "Nuevo",
        free_shipping: false,
        sold_quantity: 23,
        description: "Item Description goes here. This is a test description.",
        breadcrumbs: [
            {
                id: "123",
                name: "Home"
            },
            {
                id: "456",
                name: "Products"
            },
            {
                id: "789",
                name: "Hats"
            }
        ]
    }
}