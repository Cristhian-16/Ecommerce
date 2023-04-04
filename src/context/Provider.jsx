import { useState } from "react"
import { createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {

    const [filters, setFilters] = useState({
        categoryFill: 'all',
        minPrice: 0
    })

    return (
        <Context.Provider
            value={{
                filters,
                setFilters,
            }}>
            {children}
        </Context.Provider>
    )
}
