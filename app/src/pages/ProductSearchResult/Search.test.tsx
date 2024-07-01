import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductSearchResult from './index';
import { ProductSearchItem } from '../../shared/types/productSearch.types';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: () => {
        const mockedItems: ProductSearchItem[] = [
            {
                id: "abc123",
                title: "Deco reverse sombrero Oxford",
                price: {
                    currency: "$",
                    amount: 1.293,
                    decimals: 0o0
                },
                picture: "https://media.saltlife.com/media/catalog/product/s/a/salt-life_rod-and-gun-club-trucker-mens-hat_slm20283_dark-olive_front_1.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg",
                condition: "Nuevo",
                free_shipping: false,
            },
            {
                id: "abc124",
                title: "Deco reverse sombrero Mexico",
                price: {
                    currency: "$",
                    amount: 1.293,
                    decimals: 0o0
                },
                picture: "https://media.saltlife.com/media/catalog/product/s/a/salt-life_rod-and-gun-club-trucker-mens-hat_slm20283_dark-olive_front_1.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg",
                condition: "Nuevo",
                free_shipping: false,
            }
        ];

        return {
            items: mockedItems,
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
    }
}));

describe('Product search result', () => {
    test('renders product search correctly', () => {
        render(
            <MemoryRouter>
                <ProductSearchResult />
            </MemoryRouter>
        );

        expect(screen.getByText('Deco reverse sombrero Oxford')).toBeInTheDocument();
    });
    
    test('renders breadcrumbs correctly', () => {
        render(
            <MemoryRouter>
                <ProductSearchResult />
            </MemoryRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Hats')).toBeInTheDocument();
    });

    test('renders multiple products', () => {
        render(
            <MemoryRouter>
                <ProductSearchResult />
            </MemoryRouter>
        );

        expect(screen.getAllByTestId('product-list-item')).toHaveLength(2);
    });
});