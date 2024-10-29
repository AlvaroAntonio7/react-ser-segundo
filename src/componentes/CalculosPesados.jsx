
//useMemo seive para que al redibujar el componente no se vuelva a ejecutar metodos que consumen muchos recursos

import { useMemo, useState } from "react"





const CalculosPesados = () => {
    
    const [listaNumeros, setListaNumeros] = useState([1,2,3,4, 5, 6, 7, 8, 9, 10, 11])
    const [show, setShow] = useState(false)

    const GetCalculo = (listaNumeros)=> useMemo(()=>{//detreo el memo todo lo que se quiere memorizar
        console.log("Calculando....")
        return listaNumeros.reduce((a, b) => a*b)
    }, [listaNumeros])//solo cambia si cambia listanumeros
    

    const agregarNumero = ()=>{
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1]+1])
        }

  return (
    <>
      <h2>Calculos pesados y useMemo</h2>
      <p>{GetCalculo(listaNumeros)}</p>
      <button onClick={()=>setShow(!show)}>{show? 'show': 'hide'}</button>
      <button onClick={()=>agregarNumero()}>Agregar numero</button>
    </>
  )
}

export default CalculosPesados
