import React from 'react';
import CriarItem from '../componentes/CriarItem/CriarItem'
import CriarCliente from '../componentes/CriarCliente/CriarCliente'

export const TelaTestes = ()=>{
    return(
        <div>
            <CriarCliente />
            <CriarItem />
        </div>
    )
}
export default TelaTestes;