import { useState, useContext } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carrito from '../components/Carrito';
import { CarritoContext } from '../contexts/carritoContext';
import Productos from '../components/Productos';
import '../styles/Carrito.css';
import '../styles/Nav.css';

const ProductoP = () => {
  const [showCarrito, setShowCarrito] = useState(false);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const mostrarCarrito = () => {
    setShowCarrito(prev => !prev);
  };

  return (
    <div>
      <Nav mostrarCarrito={mostrarCarrito} />
      {showCarrito ? (
        <Carrito />
      ) : (
        <Productos agregarAlCarrito={agregarAlCarrito} />
      )}
      <Footer />
    </div>
  );
};

export default ProductoP;
