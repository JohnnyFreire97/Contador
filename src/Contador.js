import React from 'react';
import './App.css';

class Contador extends React.Component {

    constructor(props) {
        super(props);
        this.state = { segundos: 55, minutos: 59, horas: 22 };
    }
    tick() {
        this.setState(
            { segundos: this.state.segundos + 1 }
        );

        if (this.state.horas < 24) {
            if (this.state.segundos === 60) {
                this.setState({ segundos: this.state.segundos = 0 });
                this.setState({ minutos: this.state.minutos + 1 });
                if (this.state.minutos === 60) {
                    this.setState({ minutos: this.state.minutos = 0 });
                    if (this.state.horas === 23) {
                        this.setState({ horas: this.state.horas = 0 });
                    } else {
                        this.setState({ horas: this.state.horas + 1 });
                    }

                }
            }
        } else {
            this.setState({ segundos: this.state.segundos = 0 });
            this.setState({ minutos: this.state.minutos = 0 });
            this.setState({ horas: this.state.horas = 0 });
        }
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
           <div>
                <p>   {this.state.horas.toString().length == 1 ? "0" + this.state.horas.toString() : this.state.horas.toString()} :
             {this.state.minutos.toString().length == 1 ? "0" + this.state.minutos.toString() : this.state.minutos.toString()} : 
             {this.state.segundos.toString().length == 1 ? "0" + this.state.segundos.toString() : this.state.segundos.toString()}</p>
           </div>
        );
    }
}

export default Contador;