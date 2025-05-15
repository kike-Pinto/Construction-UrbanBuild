import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  // Configuración - Cambia estos valores por los tuyos
  const phoneNumber = '5491122334455' // Tu número completo (código país + código área + número)
  const defaultMessage = 'Hola, vi tu página web y me gustaría contactarte' // Mensaje predeterminado

  const trackClick = () => {
    // Aquí puedes agregar Google Analytics, Facebook Pixel, etc.
    console.log('WhatsApp button clicked')
    // Ejemplo: window.gtag('event', 'click', {'event_category': 'WhatsApp', 'event_label': 'Contact'});
  }

  // Genera el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`

  return (
    <div className='whatsapp-contact-button'>
      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Contactar por WhatsApp'
        onClick={trackClick}
      >
        <FaWhatsapp className='whatsapp-icon' />
        <span className='whatsapp-text'>Contáctame</span>
      </a>
    </div>
  )
}

export default WhatsAppButton
