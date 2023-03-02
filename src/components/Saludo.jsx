import { useCallback, useState } from "react";

const SaludoHora  = () =>{

const[nombre, setNombre] = useState("")
const[hora, setHora] = useState(0)
const[saludo, setSaludo] = useState("")

 
const DefinirSaludo = () =>{

    if(hora >=0 && hora <=11){
        
        
        setSaludo( "Buenos dias " )
    }

    else{
        if(hora < 19){
            setSaludo( "Buenas tardes," )
        }
        else{
            setSaludo( "Buenas noches, ")
        }
    }
}


return(
    <>
    <h1> Saludo </h1>
    <div>
    <label> Digite su Nombre</label>
    </div>
    <input type="text" value={nombre} onChange={(evt) => setNombre(evt.target.value)}/>

    <label> Digite la hora (formato 24h)</label>
    <input type="number" value={hora} onChange={(e) => setHora(e.target.value)}/>
    <button onClick={DefinirSaludo}> Ingresar </button>
    <h1> {saludo} {nombre} </h1>
    </>
)


}

export default SaludoHora
