import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Tarea 1", estado: true },
    { nombre: "Tarea 2", estado: false },
    { nombre: "Tarea 3", estado: true },
    { nombre: "Tarea 4", estado: false },
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
          <button type="button" className="btn btn-eliminar">Eliminar Proyecto &times;</button>
    </>
  );
};

export default ListadoTareas;
