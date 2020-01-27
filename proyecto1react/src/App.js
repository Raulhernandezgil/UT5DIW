import React, {Component} from 'react';
import Tabla from './Tabla';
import TablaComponentesSimples from './TablaComponentesSimples'
class App extends Component{
    render(){
        return (
            <div className="App">
                <h1>¿Resultado?</h1>
                <Tabla />
                <br></br>
                <TablaComponentesSimples />
            </div>
        );
    }
}

export default App