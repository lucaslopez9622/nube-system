import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../contexts/carritoContext";
import carritoIcono from '../assets/carrito.png';
import cerrarIcono from '../assets/cerrar1.png';
import '../styles/Nav.css';

const Nav = ({ mostrarCarrito, carritoVisible }) => {
  const { carritoItems } = useContext(CarritoContext);
  const carritoContador = carritoItems.length;
  return (
 <nav className="nav-bar">
      <div className="nav-item">
        <Link to="/" className="item">INICIO</Link>
        <Link to="/productos" className="item">PRODUCTOS</Link>
        <Link to="/contacto" className="item">CONTACTO</Link>
      </div>
      <div className="nav-cart" onClick={mostrarCarrito}>
        <img src={carritoVisible ? cerrarIcono : carritoIcono} alt="Icono carrito" className="icono-carrito"/>
        {!carritoVisible && carritoContador > 0 && (<span className="contador">{carritoContador}</span>)}
      </div>
    </nav>
  );
};
export default Nav;