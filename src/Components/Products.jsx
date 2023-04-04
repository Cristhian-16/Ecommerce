import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart';

export const Products = ({ products }) => {

    const { addCart, removeCart, cart } = useCart();

    const checkedProductCart = producto => {
        return cart.some(item => item.id === producto.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0, 10).map(producto => {
                        const isProductExist = checkedProductCart(producto)
                        return (
                            <li key={producto.id}>
                                <img src={producto.thumbnail} alt={producto.title} />
                                <div>
                                    <strong>{producto.title}</strong> - ${producto.price}
                                </div>
                                <div>
                                    <button
                                        style={{ backgroundColor: isProductExist ? 'red' : '#09f' }}
                                        onClick={() =>
                                            isProductExist ?
                                                removeCart(producto)
                                                :
                                                addCart(producto)
                                        }>
                                        {
                                            isProductExist ?
                                                <RemoveFromCartIcon />
                                                :
                                                <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}
