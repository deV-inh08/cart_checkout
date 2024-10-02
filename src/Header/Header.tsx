import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import NavbarCart from "../Components/Navbar/NavbarCart";



const Header = () => {
  const context = useContext(CartContext);
  if(!context) return null;
  const {handleOpenCart, openCart, cart, deleteCart} = context;
  const totalQuantity = cart.reduce((sum, item) => {
    if(item.count) {
      return sum + item.count
    } else {
      return 0
    }
  },0);

  return (
    <div className="w-full h-[70px] shadow-md relative">
      <article className="flex justify-center gap-10 h-full items-center text-lg">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/team">Team</Link>
      </article>
      <img onClick={() => handleOpenCart()} width="50" height="50" src="https://img.icons8.com/windows/50/shopping-cart.png" alt="shopping-cart" className="mt-2 w-[40px] h-[40px] absolute top-2 right-7 bg-green-500 rounded-full"/>
      {totalQuantity !== 0 && totalQuantity >= 1 && (
        <span className="absolute top-11 right-6 bg-red-500 text-white w-5 h-5 cursor-pointer text-center rounded-full">{totalQuantity}</span>
      )}
      {openCart && 
        <div className="fixed top-[70px] right-0">
          <NavbarCart deleteCart={deleteCart} openCart={openCart} cart={cart}></NavbarCart>
        </div>}
    </div>
  );
};

export default Header;
