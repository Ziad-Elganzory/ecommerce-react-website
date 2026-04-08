import { createContext, useState } from "react"
import { useContext } from "react"
import { getProductById } from "../data/products"

export const CartContext = createContext(null)

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(productId) {
        const existingItem = cartItems.find((item) => item.id === productId);
        if(existingItem){
            const currentQuantity = existingItem.quantity;
            const updatedCartItems = cartItems.map((item) => item.id === productId ? { id: item.id, quantity: currentQuantity + 1 } : item);
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, {id: productId, quantity: 1}])
        }
    }

    function getCartItemsWithProducts() {
        return cartItems.map((item) => ({
            ...item,
            product: getProductById(item.id)
        })).filter((item) => item.product);
    }

    function removeFromCart(productId) {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId, quantity) {
        if(quantity <= 0){
            removeFromCart(productId);
            return;
        }
        setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)));
    }

    function getCartTotal(){
        return cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    function clearCart(){
        setCartItems([]);
    }
    return (
        <CartContext.Provider value={{ addToCart, cartItems, getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);

    return context;
}