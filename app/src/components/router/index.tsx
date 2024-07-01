import React from "react";
import axios, { AxiosError } from "axios";
import {
  createBrowserRouter,
  redirect,
  LoaderFunctionArgs
} from "react-router-dom";
import Home from '../../pages/Home'; // Make sure the file exists in the correct location
import ProductSearchPage from '../../pages/ProductSearchResult';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import ErrorPage from '../../pages/ErrorPage';

const headers: HeadersInit = {
  "Access-Control-Allow-Origin": '*'
};


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Data fetching error", { cause: res.data });
        }
        return { items: res.data.items, breadcrumbs: res.data.breadcrumbs };
      } catch (e) {
        const error = e as AxiosError;
        throw new Response(error.message);
      }
    },
    errorElement: <ErrorPage />,
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
        if (res.status !== 200) {
          throw new Error("Data fetching error", { cause: res.data });
        }
        return { product: res.data, breadcrumbs: res.data.breadcrumbs };
      } catch (e) {
        const error = e as AxiosError;
        throw new Response(error.message);
      }
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/item/:id",
    loader: ({ params }) => redirect(`/items/${params.id}`),
  }
]);
