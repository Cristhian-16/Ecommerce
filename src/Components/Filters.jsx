import { useId } from 'react';

import { useFilter } from '../hooks/useFilter';

import './Filters.css'

export const Filters = () => {

    const id = useId();
    const { setFilters, filters } = useFilter();

    const handleChangePrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            categoryFill: e.target.value
        }))
    }

    return (
        <section className='filters'>

            <div>
                <label htmlFor={id + 'minPrice'}>Price</label>
                <input
                    onChange={handleChangePrice}
                    type="range"
                    id={id + 'minPrice'}
                    min={0}
                    max={1000}
                    value={filters.minPrice}
                />
                <span>$ {filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={id + 'categoryProducts'}>Categoria</label>
                <select id={id + 'categoryProducts'} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}
