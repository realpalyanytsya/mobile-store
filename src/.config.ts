export const CONTENT_API =
    "https://api-eu-central-1.hygraph.com/v2/cl76ltawo0ae601ui48jvavxt/master";

export const themes = {
    dark: [
        { variable: "--background", value: "#202124" },
        { variable: "--additionalBackground", value: "#494949" },
        { variable: "--text", value: "white" },
    ],
    light: [
        { variable: "--background", value: "#fff" },
        { variable: "--additionalBackground", value: "#f1f1f1" },
        { variable: "--text", value: "black" },
    ],
};

export const sortingTypes = [
    { value: "popularity", title: "by popularity", id: 1 },
    { value: "priceAsc", title: "lowest to highest price", id: 2 },
    { value: "priceDesc", title: " highest to lowest price", id: 3 },
    { value: "time", title: "by date of addition", id: 4 },
];
