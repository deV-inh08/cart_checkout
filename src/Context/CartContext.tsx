import React, { createContext, useState } from "react";
import { CardItem } from "../data";
import { isContains } from "../localStorage";
import { saveLocalStorage, removeLocalStorage } from "../localStorage";

type CartContextType = {
  cart: CardItem[];
  openCart: boolean;
  addToCart: (card: CardItem) => void;
  handleOpenCart: () => void;
  deleteCart: (card: CardItem) => void;
};

type ChildrenType = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: ChildrenType) => {
  const [cart, setCart] = useState<CardItem[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);

  // Handle AddToCart
  const addToCart = (card: CardItem) => {
    setCart((preCart) =>
      isContains(preCart, card)
        ? preCart.map((item) =>
            item.id === card.id
              ? { ...card, count: item.count && item.count + 1 }
              : item
          )
        : [...preCart, { ...card, count: 1 }]
    );
    saveLocalStorage(card);
  };

  // handle OpenCart
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  // handle DeleteCart
  const deleteCart = (card: CardItem) => {
    setCart((preCart) =>
      preCart.filter((item) => item.id !== card.id)
    );
    removeLocalStorage(card)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart , handleOpenCart, openCart, deleteCart}}>
      {children}
    </CartContext.Provider>
  );
};

