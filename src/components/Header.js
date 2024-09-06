import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/foodVilla.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
      <img data-testid="logo" className="h-28 p-2" alt="logo" src={Logo} />
    </a>
  );
  
  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);

    //custom hook to show online or offline
    const isOnline = useOnline();

    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems);
  
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10 px-10">
            <Link to="/">
                <li className="px-2">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-2">About</li>
            </Link>
            <Link to="/contact">
              <li className="px-2">Contact</li>
            </Link>
            <Link to="/instamart">
              <li className="px-2">Instamart</li>
            </Link>
            <Link to="/cart">
              <li data-testid="cart"> Cart : {cartItems.length} items</li>
            </Link>
            
          </ul>
        </div>
        <div className="flex justify-center align-middle">

          <h1 className="p-10 font-bold text-gray-700">{user.name} </h1>
          <h1 data-testid="status" className="p-10"> {(isOnline)? '✅' : '🔴'} Status  </h1>
          
          
          <div className="p-10">
              
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
              )}
          </div>
          

          
        </div>

        
      </div>
    );
  };
  
  export default Header;
  