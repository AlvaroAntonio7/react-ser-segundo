import { useFetch } from "../hooks/useFetch"


const UsuariosComponent = () => {
    const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users')
    //console.log(data)
  return (
    <>
    <h1>Lista de usuarios</h1>

    {
   isLoading
   ? <h4>Cargando....</h4>
   :error
   ?<h4>{error}</h4>
   :
   <table className="table">
   <thead>
     <tr>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">Email</th>
       <th scope="col">Website</th>
     </tr>
   </thead>
   <tbody>
   {data.map(user=>{
      return(
        <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
      )
    })}
     
   </tbody>
 </table>
}
 
    </>
  )
}

export default UsuariosComponent
