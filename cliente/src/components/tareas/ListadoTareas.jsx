import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { useContext } from "react";

const ListadoTareas = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Si no hay proyecto seleccionado, retornar un mensaje
  if (!proyecto) return <h1>Selecciona un proyecto</h1>;
  //Array destructuring para extraer el proyecto actual:
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { id: 1, nombre: "Tarea 1", estado: true },
    { id: 2, nombre: "Tarea 2", estado: false },
    { id: 3, nombre: "Tarea 3", estado: true },
    { id: 4, nombre: "Tarea 4", estado: false },
  ];
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
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
