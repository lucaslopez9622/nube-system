import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Productos.css'
import { AlertaAgregado } from '../assets/SweetAlert'

const Productos = ({ agregarAlCarrito }) => {
const [item, setItem] = useState([]); 
const [currentPage, setCurrentPage] = useState(1);
const productosPorPagina = 12;
const navigate = useNavigate();
const apiUrl = 'https://680bd5932ea307e081d27897.mockapi.io/nube-api/v1/productos'; 
    useEffect(() => {
        axios.get(apiUrl)
        .then(response =>{
          setItem(response.data); 
        })
        .catch(error =>{
          console.error('error al traer los productos',error);
        });
      },[]);
      const botonAgregar = (producto) =>{
        agregarAlCarrito(producto);
        AlertaAgregado(producto); 
      }

      const indexUltimoProducto = currentPage * productosPorPagina;
      const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
      const productosActuales = item.slice(indexPrimerProducto, indexUltimoProducto);
      const totalPaginas = Math.ceil(item.length / productosPorPagina);
      const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);
      const cambiarPagina = (numeroPagina) => {
            setCurrentPage(numeroPagina); 
          };

    if(item.length === 0){
      return <p className='cargando'>cargando productos...</p>;
    }
     return (
    <>
      <div className="productos">
        {productosActuales.map(producto => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="producto-detalle">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p className="precio">${producto.precio}</p>
              <div className="btn-prod">
                <button className="btn-agregar-producto" onClick={() => botonAgregar(producto)}>Agregar al carrito</button>
                <button className="btn-info-producto" onClick={() => navigate(`/productos/${producto.id}`)}>Ver Producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="paginacion">
        {paginas.map(num => (
          <button
            key={num}
            onClick={() => cambiarPagina(num)}
            className={currentPage === num ? 'activo' : ''}
          >
            {num}
          </button>
        ))}
      </div>
    </>
  );
};

export default Productos;