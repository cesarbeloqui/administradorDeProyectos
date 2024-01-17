import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Tarea 1", completada: true },
    { nombre: "Tarea 2", completada: false },
    { nombre: "Tarea 3", completada: true },
    { nombre: "Tarea 4", completada: false },
  ];
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
    </>
  );
};

export default ListadoTareas;
