import React from 'react';
import { Cores } from '../../constantes/cores'

const Card1 = () => {

    return(
        <div className='cardAluguel' >
            <text className='cardFont1' style={{color:Cores.primaria}}>AjudaEP</text>
            <text className='cardFont2' style={{color:Cores.primariaClara}}>Aluguel de Equipamentos</text>
        </div>
    )
}

export default Card1;