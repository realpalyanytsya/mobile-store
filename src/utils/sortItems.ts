import { IDevice } from "../types/index";

interface sortedItemsProps {
    devices: IDevice[];
    sortingType: string;
    priceValues: { min: number; max: number };
    brands: string[];
}

export const sortItems = ({
    devices,
    sortingType,
    priceValues,
    brands,
}: sortedItemsProps) => {
    const sortedArr = brands.length
        ? [...devices].filter(
              (i) =>
                  i.price >= priceValues.min &&
                  i.price <= priceValues.max &&
                  brands.includes(i.brand)
          )
        : [...devices].filter(
              (i) => i.price >= priceValues.min && i.price <= priceValues.max
          );

    if (sortingType === "popularity") {
        return sortedArr.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortingType === "priceDesc") {
        return sortedArr.sort((a, b) => b.price - a.price);
    } else if (sortingType === "priceAsc") {
        return sortedArr.sort((a, b) => a.price - b.price);
    } else if (sortingType === "time") {
        return sortedArr.sort((a, b) =>
            b.additionDate.localeCompare(a.additionDate)
        );
    } else {
        return sortedArr;
    }
};
