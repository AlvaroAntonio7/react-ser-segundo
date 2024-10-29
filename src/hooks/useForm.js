import { useState } from "react"


export const useForm = (initialForm={}) => {
    
    const [formState, setFormState] = useState(initialForm)
    //console.log(formState)
    

    const onImputChange = (e)=>{
        //console.log(e);
        //console.log(e.target.name);
        //console.log(e.target.value);
        const{name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
        
        
    }

    const resetear = ()=>{
      setFormState(initialForm)
    }

  
  return {
    //si se destructura formState: ...formState aqui, en el componente se puede llamar directo, en vez de const{formState, onImputChange} = useForm(initialForm) tendriamos const{userName, email, password, onImputChange} = useForm(initialForm)
    formState,
    onImputChange,
    resetear
  }
  
}


