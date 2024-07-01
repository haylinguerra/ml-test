import React from "react";
import Header from "./index";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";


describe("Header", () => {
    const assignMock = jest.fn();
    // @ts-expect-error - Mocking window location
    delete window.location;
    (window.location as unknown) = { assign: assignMock };
    
    afterEach(() => {
        assignMock.mockClear();
    });
    test("renders without errors", () => {
        render(<Header />);
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    test("displays the logo", () => {
        render(<Header />);
        expect(screen.getByLabelText("Logo")).toBeInTheDocument();
    });

    test("displays the search bar", () => {
        render(<Header />);
        expect(screen.getByPlaceholderText("Nunca dejes de buscar")).toBeInTheDocument();
    });

    test("updates search query on input change", async () => {
        render(<Header />);
        const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
        const submitButton = screen.getByTestId("search-button");

        fireEvent.change(searchInput, { target: { value: "example-query" } });
        fireEvent.click(submitButton);
        
        expect(searchInput).toHaveValue("example-query");
    });

    test("triggers search on submit button click", async () => {
        render(<Header />);
        const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
        const submitButton = screen.getByTestId("search-button");

        fireEvent.change(searchInput, { target: { value: "example-query" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(window.location.href).toBe("/items?search=example-query");
        });
        
    });
});