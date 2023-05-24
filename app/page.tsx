"use client"
import { useState } from "react"

const Page = () => {
  const [edad,setEdad] = useState(0);
  const [nombre,setNombre] = useState('');
  const [mensaje,setMensaje] = useState('');
  const [contador, setContador] = useState(0);

  function contar(){
    setContador(contador + 1);
  }

  function limpiar(){
    setContador(0)
  }

  function validar(){
    if(edad>=18)
      setMensaje('Es mayor de edad!')
    else
      setMensaje('No pasa :(')
  }
  const formHandler = (e:any) => {
    e.preventDefault();
    console.log('boton presionado')
  }

  return (
    <div>
      <h1 className="text-3xl text-center">Proyecto Final</h1>
      <h2>Estructuras de Datos</h2>
      <h3>{nombre}</h3>
      <button onClick={contar}>
        Contar
      </button>
      <p>{contador} numero de clics</p>
      <button onClick={limpiar}>
        Borrar
      </button>

      <form
        onSubmit={formHandler}
      >
        <input 
        type="text" 
        placeholder="Nombre " 
        value={nombre} 
        onChange={(event)=> setNombre(event.target.value)}
        />
        <input type="submit" />
        
        <input 
        type="text" 
        placeholder="Edad " 
        value={edad} 
        onChange={(event)=> setEdad(parseInt(event.target.value))}
        />
      <button onClick={validar}>
        Validar
      </button>
        <p>{mensaje}</p>
      </form>
    </div>
  )
}

export default Page
