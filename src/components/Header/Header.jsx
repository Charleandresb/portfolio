import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="header">
      <Link to="Charles" smooth={true} duration={1000} className="header__logo">
        Charles
      </Link>
      <div className="header__nav">
        <Link
          to="acerca"
          smooth={true}
          duration={1000}
          className="header__link"
        >
          Acerca
        </Link>
        <Link
          to="proyectos"
          smooth={true}
          duration={1000}
          className="header__link"
        >
          Proyectos
        </Link>
        <Link
          to="contacto"
          smooth={true}
          duration={1000}
          className="header__link"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
