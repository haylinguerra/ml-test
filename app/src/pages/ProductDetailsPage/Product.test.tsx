import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetailsPage from './index';
import { getMockedItem } from './utils/';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: () => {
        const mockedItem = {
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
        };

        return {
            product: mockedItem,
            breadcrumbs: mockedItem.breadcrumbs
        };
    }
}));

describe('ProductDetailsPage', () => {
    const product = getMockedItem();
    test('renders product details correctly', () => {

        render(
            <MemoryRouter>
                <ProductDetailsPage />
            </MemoryRouter>
        );

        expect(screen.getByText(product.item.title)).toBeInTheDocument();
        expect(screen.getByText(product.item.price.amount.toString())).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
    });
    
    test('renders breadcrumbs correctly', () => {
        render(
            <MemoryRouter>
                <ProductDetailsPage />
            </MemoryRouter>
        );

        const breadcrumbItems = screen.getAllByTestId('breadcrumb-item');
        expect(breadcrumbItems.length).toBe(product.breadcrumbs.length);
    });
});