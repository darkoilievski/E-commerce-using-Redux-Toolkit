import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  //   const amount = useSelector((store) => store.cart.amount); The same as the line below, but i think destructuring is cleaner
  const { amount } = useSelector((store) => store.cart); // It returns the object with the amount property

  return (
    <nav>
      <div className='nav-center'>
        <h3>Tech Store</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
