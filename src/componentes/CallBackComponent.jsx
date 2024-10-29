//useCallback es otra forma de memorizar pero metodos

import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"



const callbackComponent = () => {

  const [counter, setCounter] = useState(0)
  
  //const incrementarPadre = (val)=>{ //de esta forma se vuelve a redibujar el boton inecesariamente
 //   setCounter(counter+val)
 // }


const incrementarPadre = useCallback(
  (val) => {
    setCounter(contador => counter+val)
  },
  []
)

  return (
    <>
    <h1>Contador: {counter}</h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
      
    </>
  )
}

export default callbackComponent
