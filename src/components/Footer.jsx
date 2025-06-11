import { Link } from "react-router-dom";
import '../styles/Header.css'
const Footer = () => (
    <footer>
      <p>© 2025 System-Nube. Todos los derechos reservados.</p>
      <Link to='/terminos' className="item-termino"> Terminos y condiciones</Link>
      </footer>
  )
  export default Footer