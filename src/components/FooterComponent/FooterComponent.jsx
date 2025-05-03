import "./FooterComponentStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a
            href="https://github.com/vinnixp098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
          </a>

          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0e76a8" />
          </a>

          <a
            href="https://instagram.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#C13584" />
          </a>
        </div>
        <div className="footer-right">
          <ul>
            <li>Serviços</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
      <div className="dev-mention">
        Developed by <a href="https://github.com/vinnixp098">@Vini Dev</a>
      </div>
    </div>
  );
}
