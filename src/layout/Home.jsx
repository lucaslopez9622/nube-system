import { useState, useContext } from 'react';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Carrito from '../components/Carrito'
import { CarritoContext } from '../contexts/carritoContext';
import ProductosDestacados from '../components/ProductosDestacados';
import '../styles/nav.css'
const Home = () => {
  const {carritoItems, agregarAlCarrito} = useContext(CarritoContext);
  const [showCarrito, setShowCarrito] = useState(false);
  const mostrarCarrito = () => {setShowCarrito(!showCarrito);};

  return (
    <>
      <Nav carritoContador={carritoItems.length} mostrarCarrito={mostrarCarrito} carritoVisible={showCarrito}/> 
      {showCarrito && <Carrito/>}
      <Header/>
      <Banner/>
      <ProductosDestacados agregarAlCarrito={agregarAlCarrito} />
      <Footer/>
    </>
  );
};

export default Home;