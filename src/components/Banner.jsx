import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import logoamd from '../assets/logoamd.png'
import logocorsair from '../assets/logocorsair.png'
import logogigabyte from '../assets/logogigabyte.png'
import logointel from '../assets/logointel.png'
import logokingston from '../assets/logokingston.png'
import logoryzen from '../assets/logoryzen.png'
import logonvidia from '../assets/logonvidia.png'
import logoasus from '../assets/logoasus.png'
import Slider from 'react-slick'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import seguridad from '../assets/seguridad.gif'
import garantia from '../assets/garantia.gif'
import envios from '../assets/envios.gif'
import '../styles/Banner.css'

const Banner = () => {
  const config = {
    dots:false,
    infinite:true,
    autoplay:true,
    speed:800,
    autoplaySpeed:3500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
  }

  return(
    <div className='back-container'>
      <div className='bannerlogos'>
       <img src={logoasus} alt="" className='logo-banner' />
       <img src={logoamd} alt="" className='logo-banner' />
       <img src={logocorsair} alt="" className='logo-banner'/>
       <img src={logogigabyte} alt="" className='logo-banner'/>
       <img src={logointel} alt="" className='logo-banner'/>
       <img src={logokingston} alt="" className='logo-banner'/>
       <img src={logoryzen} alt="" className='logo-banner'/>
       <img src={logonvidia} alt="" className='logo-banner'/>
      </div>
    <div className='banner-container'>
        <Slider {...config}>
          <div>
            <img src={banner2} alt='promocion' className='banner-img'/>
          </div>
          <div>
            <img src={banner1} alt='promocion2' className='banner-img'/>
               <Link to="/productos" className='btn-link'>VER PRODUCTOS</Link>
          </div>
        </Slider>
      </div>

      <div className="bannericon">
        <div className="banner-item">
          <img src={envios} alt="Envío" className="icon-banner" />
          <p>Envío a todo el país</p>
        </div>
        <div className="banner-item">
          <img src={seguridad} alt="Seguridad" className="icon-banner" />
          <p>Compra segura</p>
        </div>
        <div className="banner-item">
          <img src={garantia} alt="Garantía" className="icon-banner" />
          <p>Garantía en tus productos</p>
        </div>
      </div>
    </div>
  )
}

export default Banner