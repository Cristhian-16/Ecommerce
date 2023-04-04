import './Footer.css'
import { useFilter } from '../hooks/useFilter'
// import { useCart } from '../hooks/useCart'

export const Footer = () => {

    const { filters } = useFilter()

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 3)
            }
        </footer>
    )
}
