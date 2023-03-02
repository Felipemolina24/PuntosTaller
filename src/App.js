import React, { Component } from 'react';
import ConvertirSegundos from './components/ConvertirSegundos';
import CalcularLlamada from './components/TotalPagar';
import SaludoHora from './components/Saludo'
import CompararNumero from './components/NumeroIgual';
import Ordenamiento from './components/OrdenarNumero'
import NumerosImpares from './components/NumerosImpares';
import ImprimirSalario from './components/MostrarSalario';
import NotaFinal from './components/nota';


class App extends Component {
  render() {
    return (
      <div>
        <ConvertirSegundos segundos={3600} /> 
        <CalcularLlamada/>
        <SaludoHora/>
        <CompararNumero/>
        <Ordenamiento/>
        <NumerosImpares numero={15}/>
        <ImprimirSalario/>
        <NotaFinal/>


      </div>

    );
  }
}

export default App;

