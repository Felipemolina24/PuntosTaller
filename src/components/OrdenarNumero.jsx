import { useState } from "react";

const Ordenamiento = (numero) => {

    const[numeros,setNumeros] = useState([])

    const Ordenar = () =>{

    const arrayNumeros = [...numeros, numero]   
    setNumeros(arrayNumeros.sort((a,b) => a-b))
    }


    return(
        <>
        <div>
      <h2>Lista de números ordenados</h2>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <input type="number" onChange={(e) => setNumeros(e.target.value)}/>
      <button onClick={() => Ordenar(Math.floor(Math.random() * 100))}>
        Insertar número 
      </button>
    </div>
        </>
    )
}

export default Ordenamiento