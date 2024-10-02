export interface CardItem {
    id: number;
    type: string;
    color: string;
    price: number;
    count?: number;
};


export const colors: CardItem[] = [
    {
        id: 1,
        type: "primary",
        color: "red",
        price: 16
    },
    {
        id: 2,
        type: "primary",
        color: "yellow",
        price: 20
    },
    {
        id: 3,
        type: "primary",
        color: "blue",
        price: 12,
    },
    {
        id: 4,
        type: "second",
        color: "orange",
        price: 10,
    },
    {
        id: 5,
        type: "second",
        color: "purple",
        price: 30
    },
    {
        id: 6,
        type: "second",
        color: "green",
        price: 11
    },
    {
        id: 7,
        type: "second",
        color: "gray",
        price: 20
    },
];
