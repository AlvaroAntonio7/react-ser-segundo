//Un reducer es una funcion que recibe un estado inicial, una accion, y devuelve un estado modificado, no puede usar async no modificar localStorage, solo es para hacer modificaciones en el objeto del estado

import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [{
    id:1,
    tarea: 'explicar reducers',
    finalizada: false
}]


const tareaReducer = (state = initialState, action={})=>{
   

    switch(action.type){
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload];
        
        case '[TAREAS] Finalizar Tarea':
           // console.log("finalizar")
           return state.map(tarea=>{
            if(tarea.id === action.payload){
                return{
                    ...tarea,
                    finalizada: !tarea.finalizada
                }
            }else return tarea
           })
            
        case '[TAREAS] Eliminar Tarea':
            //console.log("eliminar")
            return state.filter(tarea => tarea.id !== action.payload)
            
        case '[TAREAS] Borrar Tarea':
            //console.log("borrar todo")
            return []
            //break;
        default:
            return state
    }

    
}


//console.log(tareaReducer(initialState, agregarTarea))




const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const {tarea, formState, onImputChange} = useForm({tarea: ''})

    const agregarTareaForm = (e)=>{
        e.preventDefault();
        if(formState.tarea == '') return
        console.log(formState)
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type:'[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = (id)=>{
       

        const action ={
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea = (id)=>{
        const action ={
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const reset = ()=>{
        const action = {
            type: '[TAREAS] Borrar Tarea',
            payload: ''
        }
        dispatch(action)
    }

  return (
    <>
    <form onSubmit={agregarTareaForm}>
  <div className="mb-3">
    <label htmlFor="tarea" className="form-label">Tarea</label>
    <input type="text" 
    className="form-control" 
    name="tarea" 
    value={tarea}
    onChange={onImputChange}
    />
   
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="button" className="btn btn-danger" onClick={reset}>Limpiar</button>
</form>

<hr/>
<ul className="list-group">
    {state.map(item=>{
        return(
            <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.tarea} </span>
                <div>
                <input
                type="checkbox"
                value={item.finalizada}
                onChange={()=>finalizarTarea(item.id)}
                />
                <button onClick={()=>eliminarTarea(item.id)}>'🧺'</button>
                </div>
                </li>
        )
    })}
</ul>
    </>
  )
}

export default ListaTareas
