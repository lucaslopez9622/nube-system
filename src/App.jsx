import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './layout/Home';
import Carrito from './components/Carrito';
import ProductoP from './layout/ProductoP';
import ProductoDetalle from './components/ProductoDetalle';
import Contacto from './layout/Contacto';
import Terminos from './components/terminosCondiciones';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductoP />}/>
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/terminos" element={<Terminos/>} />
        </Routes>
      </Router>
 
  );
}
export default App;