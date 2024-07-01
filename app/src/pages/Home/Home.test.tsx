import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
    test('renders the home page', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const homeElement = screen.getByRole('main');
        expect(homeElement).toBeInTheDocument();
    });
});
