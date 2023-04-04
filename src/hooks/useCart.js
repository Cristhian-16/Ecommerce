import { useContext } from "react"
import { CardContext } from "../context/CardContext"

export const useCart = () => {

    const context = useContext(CardContext);

    if (context === undefined) {
        throw new Error('No se puede aplicar ese contexto')
    }

    return context
}
