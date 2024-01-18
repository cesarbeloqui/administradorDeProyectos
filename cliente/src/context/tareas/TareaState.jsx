import React, { useReducer } from "react";

import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

const tareasBack = [
  { id: 1, nombre: "Tarea 1", estado: true, proyectoId: 1 },
  { id: 2, nombre: "Tarea 2", estado: false, proyectoId: 1 },
  { id: 3, nombre: "Tarea 3", estado: true, proyectoId: 2 },
  { id: 4, nombre: "Tarea 4", estado: false, proyectoId: 2 },
  { id: 2, nombre: "Tarea 2", estado: false, proyectoId: 2 },
  { id: 1, nombre: "Tarea 1", estado: true, proyectoId: 3 },
  { id: 4, nombre: "Tarea 4", estado: false, proyectoId: 3 },
  { id: 3, nombre: "Tarea 3", estado: true, proyectoId: 3 },
];

const TareaState = (props) => {
  const initialState = { tareas: tareasBack, tareasProyecto: null };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // Serie de funciones para el CRUD
  //OBTENER LAS TAREAS DE UN PROYECTO
  const obtenerTareas = (proyectoId) => {
    dispatch({ type: TAREAS_PROYECTO, payload: proyectoId });
  };

  //Agregar tarea al proyecto seleccionado
  const agregarTarea = (tarea) => { 
    dispatch({type: AGREGAR_TAREA, payload: tarea})
  }

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        obtenerTareas,
        agregarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
