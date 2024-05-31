import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{

    // Whenever you use a useSelector make sure you are subscribing the right store.
    const cartItems = useSelector((store)=> store.cart.items);

    // this is very less efficient than the above code
    // const store = useSelector((store)=> store);
    // const CartItems = store.cart.items;

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        //dispatch an Action
        dispatch(clearCart());
    }
    


    return(
        <div className="text-center m-5 p-5">

            <h1 className="text-xl font-bold">Cart</h1>

            <div className="w-6/12 m-auto">

                <button 
                    className="
                    p-2 m-2
                    bg-black 
                    text-white 
                    rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length===0 && <h1>Your cart is empty!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;