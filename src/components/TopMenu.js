import ContactDialog from "./ContactDialog";
import { Link } from "react-router-dom";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <ul id="menu" className="topMenu">
      <li data-menuanchor="firstPage" className="active">
        <a href="#firstPage">Inicio</a>
      </li>
      <li data-menuanchor="secondPage">
        <a href="#secondPage">El Proyecto</a>
      </li>
      <li data-menuanchor="thirdPage">
        <a href="#thirdPage">Historias</a>
      </li>
      <li data-menuanchor="fourthPage">
        <a href="#fourthPage">El Modelo</a>
      </li>
      <li data-menuanchor="fifthPage">
        <a href="#fifthPage">Resultados</a>
      </li>
      <li data-menuanchor="sixthPage">
        <a href="#sixthPage">Noticias</a>
      </li>
      <li>
        <Link to="/contacto">Contacto</Link>
        {/* <ContactDialog /> */}
      </li>
    </ul>
  );
};

export default TopMenu;
