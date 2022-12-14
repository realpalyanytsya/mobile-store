import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "./slices/filterSlice";
import productsSlice from "./slices/productsSlice";
import productsViewSlice from "./slices/productsViewSlice";
import watchlistSlice from "./slices/watchlistSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        filter: filterSlice,
        productsView: productsViewSlice,
        watchlist: watchlistSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
