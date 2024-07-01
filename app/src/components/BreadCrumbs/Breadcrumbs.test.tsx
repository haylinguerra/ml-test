import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductBreadcrumbs } from '../../shared/types/product.types';
import { MemoryRouter } from 'react-router-dom';

import Breadcrumbs from './index';

describe('Breadcrumbs', () => {
    it('renders without errors', () => {
        render(
        <MemoryRouter>
            <Breadcrumbs breadcrumbs={[]} />
        </MemoryRouter>);
    });

    it('renders correct number of breadcrumbs', () => {
        const breadcrumbs: ProductBreadcrumbs[] = [
            { id: 'home', name: 'Home' },
            { id: 'products', name: 'Products' },
            { id: 'category', name: 'Category' },
            { id: 'item', name: 'Item' },
        ];
        render(
            <MemoryRouter>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </MemoryRouter>
        );
        const breadcrumbItems = screen.getAllByTestId('breadcrumb-item');
        expect(breadcrumbItems.length).toBe(breadcrumbs.length);
    });

    it('renders correct breadcrumb text', () => {
        const breadcrumbs: ProductBreadcrumbs[] = [
            { id: 'home', name: 'Home' },
            { id: 'products', name: 'Products' },
            { id: 'category', name: 'Category' },
            { id: 'item', name: 'Item' },
        ];
        render(
            <MemoryRouter>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </MemoryRouter>
        );
        const breadcrumbItems = screen.getAllByTestId('breadcrumb-item');
        breadcrumbItems.forEach((item, index) => {
            expect(item.textContent).toBe(breadcrumbs[index].name);
        });
    });

    it('renders correct breadcrumb id', () => {
        const breadcrumbs: ProductBreadcrumbs[] = [
            { id: 'home', name: 'Home' },
            { id: 'products', name: 'Products' },
            { id: 'category', name: 'Category' },
            { id: 'item', name: 'Item' },
        ];
        render(
            <MemoryRouter>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </MemoryRouter>
        );
        const breadcrumbItems = screen.getAllByTestId('breadcrumb-item');
        breadcrumbItems.forEach((item, index) => {
            expect(item.getAttribute('data-id')).toBe(breadcrumbs[index].id);
        });
    });
});