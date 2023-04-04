import { useContext } from 'react';
import { Context } from '../context/Provider';

export const useFilter = () => {

    const { filters, setFilters } = useContext(Context);

    const filtersProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.categoryFill === 'all' ||
                    product.category === filters.categoryFill
                )
            )
        })
    }


    return {
        filters: filters,
        setFilters: setFilters,
        filtersProducts: filtersProducts,
    }
}
