import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el state de proyectos
  const ProyectosContext = useContext(proyectoContext);
  const { proyectoActual } = ProyectosContext;
  //Obtener el state de tareas
  const TareasContext = useContext(tareaContext);
  const { obtenerTareas } = TareasContext;
  //funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar un proyecto actual
    obtenerTareas(id); //obtener las tareas del proyecto actual
  };
  return (
    <li key={proyecto.id}>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => {
          seleccionarProyecto(proyecto.id);
        }}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
