import Productos from './Productos'

const Main = ({ addToCart }) => (
  <main>
    <h2>Productos</h2>
    <Productos addToCart={addToCart} />
  </main>
)

export default Main