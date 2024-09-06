import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector(store=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div>
            <div className="flex justify-center align-middle p-5 m-2">
                <h1 className="font-bold text-gray-700 text-3xl">Cart Items</h1>
                <button className="font-bold p-1 ml-5  bg-purple-950 hover:bg-gray-700 text-white rounded-md size-auto" onClick={handleClearCart}>Clear Cart</button>
            </div>
            
            
            <div className="flex flex-wrap">
                {cartItems.map(item=>(
                        <FoodItem {...item}/>
                ))}
            </div>

        </div>
    )
}

export default Cart;