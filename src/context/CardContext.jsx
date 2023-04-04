import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addCart = product => {

        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if (productInCartIndex >= 0) {
            /* Copia Profunda del Carrito */
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart)
        }

        /* Si no existe el producto en el carrito */
        setCart(prevState =>
        /* Return explicito */
        (
            [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ]
        ))

    }
    const deleteCart = () => {
        setCart([])
    }

    const removeCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <CardContext.Provider
            value={{
                cart,
                addCart,
                deleteCart,
                removeCart,
            }}>
            {children}
        </CardContext.Provider>
    )
}