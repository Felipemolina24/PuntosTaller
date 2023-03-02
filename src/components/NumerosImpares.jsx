import React, { useEffect, useState } from 'react';

function NumerosImpares({ numero }) {
  const [numerosImpares, setNumerosImpares] = useState([]);

  // Función que se ejecuta cada vez que el número cambia
  const calcularNumerosImpares = (numero) => {
    const nuevosNumerosImpares = [];
    for (let i = 1; i < numero; i += 2) {
      nuevosNumerosImpares.push(i);
    }
    setNumerosImpares(nuevosNumerosImpares);
  };

  
  React.useEffect(() => {
    calcularNumerosImpares(numero);
  }, [numero]);
  


  
  return (
    <div>
      <h2>Listado de números impares menores que {numero}:</h2>
      <ul>
        {numerosImpares.map((numeroImpar) => (
          <li key={numeroImpar}>{numeroImpar}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumerosImpares;
