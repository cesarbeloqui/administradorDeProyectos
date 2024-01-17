import { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
const NuevoProyecto = () => {
  //Obtener state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;
  //State para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  //Extraer nombre de proyecto
  const { nombre } = proyecto;

  const onChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envia un proyecto
  const onSubmit = (e) => {
    e.preventDefault();
    //validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);
    //reiniciar form
    setProyecto({ nombre: "" });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => {
          mostrarFormulario();
        }}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            value={nombre}
            name="nombre"
            onChange={onChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
