import '../styles/Contacto.css';
import logoWeb from '../assets/logoWeb.png'
import fondotienda from '../assets/fondotienda.png';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carrito from '../components/Carrito';
import { useState } from 'react';
const Contacto = () => {
const [showCarrito, setShowCarrito] = useState(false);
const mostrarCarrito = () => {
    setShowCarrito(prev => !prev);
  };

  return (
<>
  <Nav mostrarCarrito={mostrarCarrito} carritoVisible={showCarrito}/>
  {showCarrito && <Carrito />}
  <div className="contacto-wrapper">
    <div className="contacto-top">
      <img src={fondotienda} alt="Local" className="contacto-imagen-local" />
      <div className="contacto-info">
        <img src={logoWeb} alt="Logo" className="contacto-logo" />
        <div className="contacto-datos">
          <p><strong>📍  Ubicacion:</strong> Av. Buenos Aires 742</p>
          <p><strong>⏰ Dias y horarios:</strong> Lunes a Sabado, 9:00 a 20:00</p>
          <p><strong>✉️ Email:</strong> nubesystemtienda@nubeystem.com</p>
          <p><strong>📞 Telefono:</strong> +54 1112345678</p>
        </div>
      </div>
    </div>
    <div className='nosotros'>
            <h2>ACERCA DE NOSOTROS</h2>
            <p className='nosotros-texto'>
                En Nube System nos propusimos transformar la experiencia de compra de tecnología. <br></br> ofrecemos un asesoramiento cercano y personalizado para cada cliente.<br></br>
                Nuestra tienda física, situada en el corazón de Buenos Aires, es el punto de encuentro donde tecnología y atención especializada se combinan para brindarte soluciones a medida. Además, hemos ampliado nuestras instalaciones con un depósito propio en la misma zona, lo que nos permite optimizar la logística y garantizar la disponibilidad de productos.<br></br>
                Nuestro fuerte crecimiento se basa en la confianza que nos brindan nuestros clientes y en la sólida presencia que mantenemos en redes sociales, una herramienta clave para estar siempre cerca de quienes confían en nosotros.<br></br>
                En Nube System, entendemos el verdadero valor de tu inversión en tecnología, y trabajamos día a día para que cada compra sea una experiencia segura, confiable y satisfactoria.
            </p>
    </div>
    <div className="contacto-formulario">
      <h3>CONTACTANOS</h3>
      <p> Si tenés alguna consulta no dudes en mandarnos tu mensaje</p>
      <form className="formulario-contacto">
        <label>
          Nombre y Apellido:
          <input type="text" name="nombre" required />
        </label>
        <label>
          Correo:
          <input type="email" name="correo" required />
        </label>
        <label>
          Celular:
          <input type="tel" name="celular" />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" rows="5" required></textarea>
        </label>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  </div>
    <Footer />
  </>
  )
};
export default Contacto;