import avatar from "../../images/avatar.png";
import { MessageCircleCode } from "lucide-react";
import { Palette } from "lucide-react";

const projects = [
  {
    description:
      "Aroundnat | Proyecto FullStack | Red social para publicar fotografías de los hermosos lugares naturales donde los usuarios han estado.",
    icon: <MessageCircleCode />,
    link: "https://web-project-api-full-woad.vercel.app",
  },
  {
    description:
      "Librería Mistral | Proyecto FullStack | Cimientos de un comercio en línea para tienda de útiles escolares en etapa de crecimiento, con una amplia gama de productos.",
    icon: <MessageCircleCode />,
    link: "https://libreriamistral.vercel.app",
  },
  {
    description:
      "El Culebrón | Portafolio de Diseños | La última sección muestra registro fotográfico de proyecto medioambiental desarrollado en la región de Coquimbo.",
    icon: <Palette />,
    link: "https://charles91.mystrikingly.com",
  },
];

export default function Main() {
  return (
    <div id="Charles" className="main">
      <div id="acerca" className="main__header">
        <img
          src={avatar}
          alt="Foto de perfil"
          className="main__header-avatar"
        />
        <div className="main__header-text">
          <p className="main__header-text-pretitle">Hola! Soy</p>
          <h1 className="main__header-text-title">Charles</h1>
          <p className="main__header-text-description">
            Carlos Muñoz | Desarrollador Fullstack | Diseñador
          </p>
        </div>
      </div>
      <div className="main__description">
        <h2 className="main__description-title">Soy desarrollador web</h2>
        <div className="main__description-subcont">
          <p className="main__description-subtitle">
            Motivado por una oportunidad en el mundo
          </p>
          <p className="main__description-ti">TI</p>
        </div>
        <p className="main__description-paragraph">
          Graduado en Desarrollo web y Diseño Digital, con una gran pasión
          artística por medio de la programación. Me encanta crear hermosas
          interfaces visuales para las personas, fáciles de utilizar para
          generar una experiencia agradable.
        </p>
      </div>
      <div id="proyectos" className="main__projects">
        <h2 className="main__projects-title">Experiencia</h2>
        <div className="main__projects-cont">
          {projects.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              className="main__projects-link"
              key={index}
            >
              <div className="main__projects-icon">{item.icon}</div>
              <p className="main__projects-text">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
