import { useFilter } from "./hooks/useFilter";

import { products as initialState } from './mocks/products.json'

import { Header } from "./Components/Header";
import { Products } from "./Components/Products"
import { Footer } from './Components/Footer';
import { Card } from './Components/Card';

import { IS_DEVELOPMENT } from './config';
import { CardProvider } from "./context/CardContext";


function App() {

  const { filtersProducts } = useFilter();

  const filterProduct = filtersProducts(initialState)

  return (
    <CardProvider>
      <Header />
      <Card />
      <Products products={filterProduct} />

      {
        IS_DEVELOPMENT && <Footer />
      }

    </CardProvider>
  )
}

export default App
