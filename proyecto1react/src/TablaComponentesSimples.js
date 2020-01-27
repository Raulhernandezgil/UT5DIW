import React, {Component} from 'react';

const Cabecera= ()=>{
    return (
        <thead>
            <tr>
                <th>Nombre: </th>
                <th>Edad: </th>
            </tr>
        </thead>
    )
}

const Cuerpo=()=>{
    return(
        <tbody>
            <tr>
                <td>Juanete</td>
                <td>3 meses</td>
            </tr>
            <tr>
                <td>Su amor por mi</td>
                <td>NaN</td>
            </tr>
        </tbody>
    )
}

class TablaComponentesSimples extends Component{
    render(){
        return(
            <table>
                <Cabecera/>
                <Cuerpo/>
            </table>
        )
    }
}

export default TablaComponentesSimples