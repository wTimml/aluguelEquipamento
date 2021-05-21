import React from 'react';
import './botoes.css'
import {Cores} from '../../constantes/cores.js' 

const Botao1 = ({children, onClick, ...props}) => {
    return(
        <button
            {...props}
            onClick={onClick}
            style={{background:Cores.botao, color:Cores.secundariaClara}}
            className='botao1'
        >
            {children || 'label'}
        </button>
    )
}
export default Botao1;