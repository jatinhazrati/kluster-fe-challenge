import { FC, lazy } from "react";

const Home = lazy<FC>(() => import("../pages/Home/index"));
const Books = lazy<FC>(() => import("../pages/Books/index"));
const Authors = lazy<FC>(() => import("../pages/Authors/index"));
const BookDetails = lazy<FC>(() => import("../pages/BookDetails/index"));
const AuthorDetails = lazy<FC>(() => import("../pages/AuthorDetails/index"));

export const ROUTES = [
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
