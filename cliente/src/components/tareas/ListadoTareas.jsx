import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { useContext } from "react";

const ListadoTareas = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado, retornar un mensaje
  if (!proyecto) return <h1>Selecciona un proyecto</h1>;
  //Array destructuring para extraer el proyecto actual:
  const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} key={tarea.id} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
