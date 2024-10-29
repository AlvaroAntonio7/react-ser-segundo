import CalculosPesados from "./componentes/CalculosPesados"
import ContadorComponent from "./componentes/ContadorComponent"
import FormularioComponent from "./componentes/FormularioComponent"
import UsuariosComponent from "./componentes/UsuariosComponent"
import CallBackComponent from "./componentes/CallBackComponent"
import ListaTareas from "./componentes/ListaTareas"


const HookApp = () => {
  return (
    <>
    <h1>
      Aplicacion de Hooks
    </h1>
    <ContadorComponent></ContadorComponent>
    <FormularioComponent></FormularioComponent>
    <UsuariosComponent></UsuariosComponent>
    <CalculosPesados></CalculosPesados>
   
    <CallBackComponent></CallBackComponent>
    <ListaTareas></ListaTareas>
    </>
    
 
  )
}

export default HookApp
