import '../styles/Carrito.css';
import { useContext } from "react";
import { CarritoContext } from '../contexts/carritoContext.jsx';
import { Alerta } from '../assets/SweetAlert';
import { AlertaEliminar } from '../assets/SweetAlert';

function Carrito() {
  const { carritoItems, vaciarCarrito, borrarProductoCarrito, disminuirCantidad, aumentarCantidad } = useContext(CarritoContext);
  const total = carritoItems.reduce((subTotal, producto) => subTotal + producto.precio * producto.cantidad,0);
  const Compra = async () => {
  const confirmado = await Alerta();
  if (confirmado) {
    vaciarCarrito(); 
  }
};
const eliminarVaciar = async () => {
  const confirmado = await AlertaEliminar();
  if (confirmado) {
    vaciarCarrito();
  }
};
  return (
    <div className="carrito-container">
      <div className="carrito">
      <div className="inf"> <p>Aceptamos todas las tarjetas ¡COMPRA 100% SEGURA! Envíos a todo el país</p> </div>
      <div className="carrito-header">
        <h2>MI CARRITO</h2>
        {carritoItems.length > 0 && ( <button onClick={eliminarVaciar} className="btn-vaciar">Vaciar carrito</button>)}
      </div>
    <div className="carrito-main">
      <div className="carrito-items">
        {carritoItems.length > 0 ? (
          carritoItems.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} />
              <div className="carrito-item-detalles">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>Precio: ${item.precio}</p>
                <div className="cantidad-control">
                <button onClick={() => disminuirCantidad(item.id)}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => aumentarCantidad(item.id)}>+</button>
                  </div>
                <p>Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</p>
                <button className="btn-eliminar"onClick={() => borrarProductoCarrito(item.id)}>Eliminar</button>
              </div>
            </div>
          ))) : (<p>Sin productos en el carrito...</p>)}
      </div>
      {total > 0 && (
        <div className="carrito-resumen">
          <h3>Resumen de compra</h3>
          <p className="carrito-productos">Productos ({carritoItems.reduce((acc, item) => acc + item.cantidad, 0)})</p>
          <p className="carrito-total">Total: ${total.toFixed(2)}</p>
          <button onClick={Compra} className="btn-comprar">Continuar compra</button>
        </div>
      )}
    </div>
  </div>
</div>
  );
}
export default Carrito;



