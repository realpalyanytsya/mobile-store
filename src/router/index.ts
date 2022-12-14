import { Cart } from "./../pages/Cart/Cart";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Watchlist from "../pages/Watchlist/Watchlist";
import Page404 from "../pages/Page404/Page404";

export const routes = [
    { path: "/", element: LandingPage },
    { path: "/products", element: ProductsPage },
    { path: "/products/:slugParams", element: ProductPage },
    { path: "/cart", element: Cart },
    { path: "/watchlist", element: Watchlist },
    { path: "*", element: Page404 },
];
