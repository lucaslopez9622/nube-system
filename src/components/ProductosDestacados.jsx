import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import '../styles/ProductosDestacados.css'

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    axios.get('https://680bd5932ea307e081d27897.mockapi.io/nube-api/v1/productos') 
      .then(response => {
        const destacados = response.data.slice(0,4); 
        setProductos(destacados);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });
  }, []);
  return (
    <div className="destacados-container">
      <div className="titulo">
        <h2>PRODUCTOS DESTACADOS </h2>
      </div>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <p className="produc-oferta">🔥 PRODUCTO EN OFERTA 🔥</p>
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>{producto.nombre}</h4>
            <p>${producto.precio}</p>
            <div className="boton">
              <button className="btn-ver" onClick ={() => navigate('/productos/' + producto.id)}> ver producto </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductosDestacados;