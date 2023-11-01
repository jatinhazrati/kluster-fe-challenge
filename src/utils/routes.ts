import { FC, lazy } from "react";

const Home = lazy<FC>(() => import("../pages/Home/index"));
const Books = lazy<FC>(() => import("../pages/Books/index"));
const Authors = lazy<FC>(() => import("../pages/Authors/index"));
const BookDetails = lazy<FC>(() => import("../pages/BookDetails/index"));
const AuthorDetails = lazy<FC>(() => import("../pages/AuthorDetails/index"));
const Cart = lazy<FC>(() => import("../pages/Cart/index"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/authors",
    component: Authors,
  },
  {
    path: "/book/:id",
    component: BookDetails,
  },
  {
    path: "/author/:name",
    component: AuthorDetails,
  },
];

export const PRIVATE_ROUTE = [
  {
    path: "/cart",
    component: Cart,
  },
];
