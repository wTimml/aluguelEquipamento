import React from 'react';
import CriarItem from '../componentes/CriarItem/CriarItem'
import CriarProduto from '../componentes/CriarProduto/CriarProduto'

export const TelaTestes = ()=>{
    return(
        <div>
            <CriarProduto />
            <CriarItem />
        </div>
    )
}
export default TelaTestes;