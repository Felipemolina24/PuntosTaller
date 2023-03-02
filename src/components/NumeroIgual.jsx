
import { useState } from "react";


const CompararNumero = () =>{


const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [num3, setNum3] = useState(0)
const [contador, setContador] = useState(0)

const ContadorVeces = () =>{

    if (num1 === num2 && num1 === num3) {
        setContador("Los Los tres números son iguales ") 
      } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        setContador("Dos de los tres números son iguales ")  
      } else {
        setContador("Los tres números son diferentes ")
      }
}

return(
    <>
    <h1> Comparacion de numeros</h1>
    <div>
        <label> Digite el numero1 </label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
    </div>
    <div>
        <label> Digite el numero2</label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
    </div>
    <div>
        <label> Digite el numero3 </label>
        <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)}/>
    </div>
    <button onClick={ContadorVeces}> calcular </button>
    <p> {contador}</p>
    </>
)

}

export default CompararNumero