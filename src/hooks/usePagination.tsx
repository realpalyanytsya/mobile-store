import { limitItems } from "../.config";
import { IDevice } from "../types";
import { getPages } from "../utils/getPages";

export const usePagination = (data: IDevice[], page: number) => {
    const itemsLimit = limitItems;

    const firstIndex = page === 1 ? 0 : itemsLimit * page - itemsLimit;
    const secondIndex = itemsLimit * page;

    const filtered = data.slice(firstIndex, secondIndex);
    const totalPages = getPages(data.length, itemsLimit);

    return { data: filtered, totalPages };
};
