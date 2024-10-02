import React, { useContext } from "react";
import { colors } from "../../data";
import { CartContext } from "../../Context/CartContext";


export const colorsClass: Record<string, string> = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  yellow: "bg-yellow-600",
  gray: "bg-gray-600",
  orange: "bg-orange-600",
  purple: "bg-pruple-600",
};

const Card = () => {
  const context = useContext(CartContext);
  if(!context) return null;
  const {addToCart} = context;

  return (
    <div className="container mx-auto mt-[50px]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        {colors.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className={`w-10 h-10 ${colorsClass[item.color]}`}></div>
              <article>
                <p>Type: {item.type}</p>
                <p>Price: {item.price}</p>
              </article>
              <button
                onClick={() => addToCart(item)}
                type="submit"
                className="border-slate-950 bg-green-300 px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
