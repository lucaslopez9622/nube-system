import Nav from "../components/Nav"
import Footer from "../components/Footer"
import '../styles/terminosCondiciones.css'
const Terminos = () =>(
<>
  <Nav/>
    <div className="terminos-container">
        <div className="titulo">
            <h1>TERMINOS Y CONDICIONES </h1>
        </div>
        <div className="condiciones-container">
            <h2>Políticas de Privacidad</h2> 
            <p>En Nube System nos comprometemos a proteger la privacidad de nuestros usuarios. <br></br> Toda la información personal recopilada a través de nuestro sitio web será utilizada exclusivamente para brindar una mejor experiencia de compra y atención al cliente.<br></br> No compartimos ni vendemos tus datos a terceros sin tu consentimiento previo.</p>
            <h2> Protección de Datos Personales</h2>
            <p>De acuerdo con la Ley de Protección de Datos Personales, los usuarios tienen derecho a acceder, rectificar y eliminar sus datos personales en cualquier momento.<br></br> Podés solicitar estos cambios enviando un correo electrónico a nubesystemtienda@nubeystem.com Toda la información es almacenada de forma segura para evitar accesos no autorizados.</p>  
            <h2>Forma de Entrega y Pago</h2>
            <p>Formas de entrega:</p>  
            <p>Envíos a domicilio dentro de CABA y GBA (24 a 72 hs hábiles).</p>  
            <p>Retiro en tienda física (Palermo, CABA).</p>  
            <p>Formas de pago:</p> 
            <p>Transferencia bancaria.</p> 
            <p>Tarjetas de crédito/débito a través de MercadoPago.</p> 
            <p>Efectivo (solo en tienda).</p> 
            <p>Los envíos se realizan una vez confirmado el pago. <br></br>En caso de demoras o inconvenientes logísticos, el equipo de Nube System se pondrá en contacto.</p> 
            <h2>Productos en Estado de Prueba</h2>
            <p>Algunos productos pueden ofrecerse como "productos en estado de prueba" o reacondicionados, Esta condición será aclarada previamente en la descripción del producto.</p>   
            <p>Estos artículos han sido revisados y garantizan funcionamiento adecuado, pero pueden presentar detalles estéticos menores.</p>   
            <p>Los productos en estado de prueba cuentan con garantía limitada según la categoría, informada al momento de la compra.</p>  
        </div>
    </div>
    <Footer/>
</>
)

export default Terminos