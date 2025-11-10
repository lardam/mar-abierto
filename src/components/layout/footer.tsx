import InstagramIcon from '@/assets/icons/instagram';
import SubscriptionForm from '../ui/subscription-form';
import FacebookIcon from '@/assets/icons/facebook';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer" id="como-llegar">
      <div className="max-width">
        <div className="subscription-container">
          <h4>¡Enterate de todas nuestras novedades!</h4>
          <SubscriptionForm />
          <ul className="social-links-list">
            <li className="social-link-item">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="social-link-item">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-data-container">
          <ul className="info-links-list">
            <li className="info-link-item">
              <Link href="/" className="info-link">
                Horarios y llegada
              </Link>
            </li>
            <li className="info-link-item">
              <Link href="/" className="info-link">
                Bases y condiciones
              </Link>
            </li>
          </ul>
          <ul className="info-list">
            <li className="info-list-item">
              Avenida Félix U. Camet & López de Gomara,
              <br />
              Mar del Plata
            </li>
            <li className="info-list-item">
              Martes a Viernes: 10:00-16:00
              <br />
              Sábado a Domingo: 14:00-20:00
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </footer>
  );
}
