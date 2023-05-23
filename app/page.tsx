"use client"
import { useState } from "react"

const Page = () => {
  const [nombre,setNombre] = useState('Haro Calvo Ricardo');
  const [contador, setContador] = useState(0)

  function contar(){
    setContador(contador + 1);
  }

  function limpiar(){
    setContador(0)
  }

  return (
    <div>
      <h1>Proyecto Final</h1>
      <h2>Estructuras de Datos</h2>
      <h3>{nombre}</h3>
      <button onClick={contar}>
        Contar
      </button>
      <p>{contador} numero de clics</p>
      <button onClick={limpiar}>
        Borrar
      </button>
    </div>
  )
}

export default Page
