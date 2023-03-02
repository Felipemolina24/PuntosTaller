import React, { Component } from 'react';

class ConvertirSegundos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      segundos: this.props.segundos,
      horas: 0,
      minutos: 0,
      segundosRestantes: 0
    };
  }

  componentDidMount() {
    const { segundos } = this.state;
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
    this.setState({ horas, minutos, segundosRestantes });
  }

  render() {
    const { horas, minutos, segundosRestantes } = this.state;

    return (
      <div>
        <p>Horas: {horas}</p>
        <p>Minutos: {minutos}</p>
        <p>Segundos: {segundosRestantes}</p>
      </div>
    );
  }
}

export default ConvertirSegundos;
