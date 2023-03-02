import { useState } from "react";

const NotaFinal = () =>{
    
    const[nombre,setNombre] = useState("")
    const[nota1, setNota1] = useState(0)
    const[nota2, setNota2] = useState(0)
    const[nota3, setNota3] = useState(0)
    const[resultado, setResultado] = useState("")

    const calcularNota = () =>{
        let promedio = (nota1 + nota2 + nota3) / 3
        if(promedio >= 3 && promedio <=5 ){
            setResultado("Aprobo")
        }
        else{
            if(promedio >=0 && promedio < 3){
            setResultado("No aprobo")
            }
        }
    }

    return(
        <>
        <div>
            <label> Ingrese el nombre </label>
            <input type="text" onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div>
            <label> Ingrese nota1 </label>
            <input type="number" onChange={(e) => setNota1(e.target.value)}/>
        </div>
        <div>
            <label> Ingrese nota2 </label>
            <input type="number" onChange={(e) => setNota2(e.target.value)}/>
        </div>
        <div>
            <label> Ingrese nota3 </label>
            <input type="number" onChange={(e) => setNota3(e.target.value)}/>
        </div>
        <button onClick={calcularNota} > Calcular </button>
        <p> El alumno {nombre} {resultado}</p>

        </>
    )
}

export default NotaFinal