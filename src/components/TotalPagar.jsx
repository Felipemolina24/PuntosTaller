import { useState } from "react";

const CalcularLlamada = () =>{

    const[duracion, setDuracion] = useState(0)
    const[pago, setPago] = useState(0)

    const calcularPago = () =>{
     if(duracion <= 3){
        setPago(100)
     }

        else{
        const pagoTotal = 100 + (duracion-3) * ( 50)
        
        setPago(pagoTotal)
        }   
     }   
    return(
        <>
        <h1> Calculo de llamada</h1>

        <label> Duracion de la llamada:  </label>
        <input type="number" value={duracion} onChange = {(e) => setDuracion(parseInt(e.target.value))}/>
        <button onClick={calcularPago}> calcular </button>
        <p> El costo total es: {pago} </p>
        </>
    )
}


export default CalcularLlamada
