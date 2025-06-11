import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CarritoContext } from "../contexts/carritoContext.jsx";
import { AlertaAgregado } from "../assets/SweetAlert";
import axios from "axios";
import "../styles/ProductosDetalle.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);
  useEffect(() => {
    axios
      .get(
        `https://680bd5932ea307e081d27897.mockapi.io/nube-api/v1/productos/${id}`
      )
      .then((response) => setProducto(response.data))
      .catch((error) => console.error("Error al cargar el producto", error));
  }, [id]);

  const botonAgregar = (producto) => {
    agregarAlCarrito(producto);
    AlertaAgregado(producto);
  };
  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="detalle-container">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="producto-info-detalle">
        <h2>{producto.nombre}</h2>

        <div className="caracteristicas-detalle">
          <p><strong>Características:</strong> {producto.caracteristicas}</p>
          <p><strong>Stock disponible:</strong> {producto.stock}</p>
        </div>
        <div className="precio-detalle">${producto.precio}</div>
        <div className="botones-detalle">
          <button
            className="btn-agregar-detalle"
            onClick={() => botonAgregar(producto)}
          >
            {" "}
            Agregar al carrito
          </button>
          <button className="btn-volver-detalle" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
