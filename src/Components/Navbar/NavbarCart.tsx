import React from "react";
import { CardItem } from "../../data";
import { colorsClass } from "../Card/Card";

type NavbarCartType = {
  openCart: boolean;
  cart: CardItem[];
  deleteCart: (card: CardItem) => void;
};


const NavbarCart = ({ openCart, cart , deleteCart}: NavbarCartType) => {
  return (
    <div
      className={`w-[500px] bg-gray-200 shadow-md h-screen transition-all ${
        openCart ? "visible" : "hidden"
      }`}
    >
      <h2 className="font-semibold mx-4 pt-6 text-center text-3xl">My Cart</h2>
      {cart.length < 0 ? (
        <p>My cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => {
            console.log(item)
            return (
              <li key={index} className="flex justify-between items-center my-6 w-[85%] mx-auto">
              <div className="flex gap-3 items-center">
                <div
                  className={`w-[100px] h-[100px] ${colorsClass[item.color]}`}
                ></div>
                <article>
                  <p className="font-semibold text-xl">{item.type}</p>
                  <p className="">{item.color}</p>
                  <p className="text-gray-700 text-sm">{item.count}x</p>
                </article>
              </div>
              <article>
                <p className="text-xl font-semibold">{item.price}$</p>
                <button onClick={() => deleteCart(item)} className="text-red-600 border border-red-300 px-3 py-2">X</button>
              </article>
            </li>
            )
          })}
        </ul>
      )}
    </div>
  );
};

export default NavbarCart;
