import fondo01 from '../assets/fondo01.png'
import '../styles/Header.css';
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet"></link>

const Header = () => (
  <header>
    <img src={fondo01} alt="fondo" className='fondoimg'/> 
  </header>
);

export default Header;