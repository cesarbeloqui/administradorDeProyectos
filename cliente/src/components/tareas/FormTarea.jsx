import proyectoContext from "../../context/proyectos/proyectoContext";
import { useContext } from "react";

const FormTarea = () => {
  //Extraer si un proyecto esta activo
  const ProyectoContext = useContext(proyectoContext);
  const { proyecto } = ProyectoContext;
  if (!proyecto) return null;

  //Hago destructuring del proyecto actual seleccionado esto con el objetivo de usar el agregar tareas al proyecto:

  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar la tarea

    //Pasar la validacion

    //Agregar nueva tarea al state de tareas

    //Reiniciar el formulario
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la Tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
