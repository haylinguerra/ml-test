import React from "react";
import axios from "axios";
import {
  createBrowserRouter,
  redirect,
  LoaderFunctionArgs
} from "react-router-dom";
import Home from '../../pages/Home'; // Make sure the file exists in the correct location
import ProductSearchPage from '../../pages/ProductSearchResult';
import ProductDetailsPage from '../../pages/ProductDetailsPage';

const headers: HeadersInit = {
  "Access-Control-Allow-Origin": '*'
};


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/items",
    element: <ProductSearchPage />,
    loader: async (args: LoaderFunctionArgs<{ search: string }>) => {
      let { search } = args.params;
      if (!search) {
        const url = new URL(args.request.url);
        search = url.searchParams.get("search") || "";
      }
      try {
        const res = await axios.get(`http://localhost:3005/api/items?q=${search}`, headers);
        const result = res.data; // Axios ya convierte la respuesta a JSON automáticamente
        return { items: result.items, breadcrumbs: result.breadcrumbs };
      } catch (error) {
        throw new Response("Not Found", { status: 404 });
      }
    },
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/item",
    loader: () => redirect("/items"),
  },
  {
    path: "/items/:id",
    element: <ProductDetailsPage />,
    loader: async ({ params }) => {
      try {
        const res = await axios.get(`http://localhost:3005/api/items/${params.id}`, headers);
        const result = res.data;
        return { product: result, breadcrumbs: result.breadcrumbs };
      } catch (error) {
        throw new Response("Not Found", { status: 404 });
      }
    },
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/item/:id",
    loader: ({ params }) => redirect(`/items/${params.id}`),
  }
]);
