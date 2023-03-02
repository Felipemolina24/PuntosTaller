import React, { useState, useEffect } from "react";

const ImprimirSalario = ({salario}) =>{
    
    const[salarios,setSalario] = useState([])


    const AumentoSalario = (salario) =>{

        let aumento = salario + (salario*0.08)

        const arrayAumento =[9]
        
        
            for(let i=0; i<arrayAumento.length; i++){

            arrayAumento.push(aumento[i])
          }
          setSalario(arrayAumento)
        

    

        
    }


     React.useEffect(() => {
        AumentoSalario(salario);
      }, [salario]);

   
    return(
        <>
        <label>Listado de salarios con aumento</label>
        <ul>
        {salarios.map((sAumento) => (
          <li key={sAumento}>{sAumento}</li>
        ))}
      </ul>


        </>
    )
}

export default ImprimirSalario