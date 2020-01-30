import React, {Component} from 'react';
import Tabla from './Tabla';
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentes from './TablaComponentes'
class App extends Component{
    state = {
        personajes: [
           {
                nombre: "Papyyong"
                
            },
            {
                nombre: "Papy"
                
            },
            {
                nombre: "Rolryus"
                
            },
            {
                nombre: "Gopmunus"
                
            }
        ]
    }
    borrarPersonaje = indice => {
        const {personajes} = this.state

        this.setstate(
            {
                personajes: personajes.filter((personaje, i) => {
                    return i !== indice;
                })
            }
        )
    }
    render(){
        const actoresactrices=[
            {
                nombre:'Joel',
                apellidos:'Dearton'
            },
            {
                nombre:'Louise',
                apellidos:'Megatero'
            },
            {
                nombre:'JLeandro',
                apellidos:'DERRITEN'
            },
            {
                nombre:'Kabriner',
                apellidos:'OALDE'
            }
        ];

        return (
            <div className="App">
                <h1>¿Resultado?</h1>
                <Tabla />
                <br></br>
                <TablaComponentesSimples />
                <TablaComponentes datosactoresactrices={actoresactrices} />
            </div>
        );
    }
}

export default App