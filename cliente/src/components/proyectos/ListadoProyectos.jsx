import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { useContext } from "react";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;
  //Revisando si proyectos tiene contenido:
  if (proyectos.length === 0) return null;
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
