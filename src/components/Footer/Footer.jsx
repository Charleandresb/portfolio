import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";

export default function Footer() {
  return (
    <div id="contacto" className="footer">
      <h3 className="footer__title">Contacto</h3>
      <p className="footer__text">
        Actualmente busco unirme a un equipo de programación para aportar mis
        habilidades, crecer como profesional y consolidarme en el mundo de
        Tecnología de la Información.
      </p>
      <p className="footer__email">carlos.arte91@gmail.com</p>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/charlesmunozaraya/"
          target="_blank"
        >
          <img
            src={Linkedin}
            alt="Linkedin"
            className="footer__links-linkedin"
          />
        </a>
        <a href="https://github.com/charleandresb" target="_blank">
          <img src={Github} alt="Github" className="footer__links-github" />
        </a>
      </div>
      <p className="footer__copyright">&copy; 2025 Charles</p>
    </div>
  );
}
