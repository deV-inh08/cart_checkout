import { CardItem } from "./data";


// check card has in Cart ?
export const isContains = (carts: CardItem[], card: CardItem) : boolean => (carts.some((item) => item.id === card.id));

// checkLocalStorage
export const checkLocalStorage = () => {
    const carts = localStorage.getItem("carts");
    if(!carts) {
        return []
    } else {
        return JSON.parse(carts)
    }
};

// saveLocalStorage
export const saveLocalStorage = (card: CardItem) => {
    let carts = checkLocalStorage() as CardItem[];
    isContains(carts, card)
        ? (carts = carts.map((item) => (
            item.id === card.id
                ? {...card, count: item.count && item.count + 1}
                : item
        )))
        : carts.push({...card, count: 1});
    localStorage.setItem("carts", JSON.stringify(carts));
};


// remove Localstore
export const removeLocalStorage = (card: CardItem) => {
    let carts = checkLocalStorage() as CardItem[];
    carts = carts.filter((item) => item.id !== card.id);
    localStorage.setItem("carts", JSON.stringify(carts));
};