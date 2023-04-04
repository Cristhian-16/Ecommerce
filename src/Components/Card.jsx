import { useId } from 'react'

import './Card.css'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart';

export const Card = () => {

    const cartLabelId = useId();
    const { cart, deleteCart, addCart } = useCart();

    /* Producto anterior + El producto actual * su precio => Producto anterior = 0  */
    const priceTotal = cart.reduce((a, b) => a + (b.price * b.quantity), 0);

    return (
        <>
            <label
                className='cart-button'
                htmlFor={cartLabelId}>
                <CartIcon />
            </label>
            <input
                type="checkbox"
                id={cartLabelId}
                hidden
            />
            <aside
                className='cart'>
                <ul>
                    {
                        cart.map(producto => (
                            <li key={producto.id}>
                                <img src={producto.thumbnail} alt={producto.title} />
                                <div>
                                    <strong>{producto.title}</strong> - $ {producto.price}
                                </div>
                                <footer>
                                    <small>
                                        {producto.quantity}
                                    </small>
                                    <button onClick={() => addCart(producto)}>
                                        +
                                    </button>
                                </footer>
                            </li>
                        ))
                    }
                </ul>
                <p>Total a pagar : $ {priceTotal}</p>
                <button onClick={deleteCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
