import React, { Component } from "react";

const  Cabecera= ()=>{
    return (
        <thead>
            <tr>
                <th>Nombre: </th>
                <th>Apellidos: </th>
            </tr>
        </thead>
    )
}
const  Cuerpo = props => {
    const datosactoresactrices = props.datosactoresactrices.map
    ((fila,indice)=>{
        return ( 
        <tr key={indice}>
            <td>{fila.nombre}</td>
            <td>{fila.apellidos}</td>
            <td><button onClick={() => props.borrarPersonaje(indice)}>Borrar</button></td>
        </tr> 
        )    
    })
    return (
        <tbody>
            {datosactoresactrices }
        </tbody>
    )
}
    



class TablaComponentes extends Component{
    render(){
        const {datosactoresactrices, borrarPersonaje}=this.props; /* Utilizo los props pasados al componente desde la aplicacion */
        return (
            <table>
                <Cabecera />
                <Cuerpo  datosactoresactrices={datosactoresactrices} borrarPersonaje={this.borrarPersonaje} />

            </table>
        )

    }
}

export default TablaComponentes