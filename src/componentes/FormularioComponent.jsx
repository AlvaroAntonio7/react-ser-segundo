
import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"

const FormularioComponent = () => {

  //useRef es nativo de React y es un hook de referencia usado para enlazar un pedazo de jsx
   //a una informacion y retenerla como referencia y mantenerla aunque se vuelva a renderizar 
  // el componente

  const focusRef = useRef()

    const initialForm = {
    userName: '',
    email: '',
    password: ''
    }

    const{formState, onImputChange, resetear} = useForm(initialForm) //se puede usar la forma const{formState, onImputChange, reset } para limpiar los valores 
    //tiene q ser lo mismo q mandamos
    const {userName, email, password} = formState //se hace de esta forma para que si pasamos otron campos aqui se los reconozca

   

    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(formState)
       
       resetear()
    }



useEffect(() => {
  focusRef.current.focus() //lleva el foco al que tenga la tag ref = {focusRef}

 
}, [])



  return (
    <>
      <h2>Formularios</h2> 
      {/*para jsx los imputs si necesitan cierre, class pasa a ser className, for pasa a ser htmlFor, (e)=>onSubmit(e) = onSumbit  */}
      <form onSubmit={onSubmit}>
      <div className="mb-3">
    <label htmlFor="userName" className="form-label">UserName</label>
    <input  ref = {focusRef} type="text" className="form-control" name="userName" value={userName} onChange={onImputChange} ></input>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input  type="email" className="form-control" name="email" value={email} onChange={onImputChange}></input>
    <div id="emailHelp" className="form-text">enter the email.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input   type="password" className="form-control" name="password" value={password} onChange={onImputChange}></input>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default FormularioComponent