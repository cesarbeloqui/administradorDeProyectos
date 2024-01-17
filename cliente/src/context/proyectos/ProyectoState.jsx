import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO,
} from "../../types";
const proyectos = [
  { id: 1, nombre: "Proyecto 1" },
  { id: 2, nombre: "Proyecto 2" },
  { id: 3, nombre: "Proyecto 3" },
];

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  //Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({ type: OBTENER_PROYECTO, payload: proyectos });
  };

  //Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();
    //insertar proyecto a la lista de proyectos en el estado global
    dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
