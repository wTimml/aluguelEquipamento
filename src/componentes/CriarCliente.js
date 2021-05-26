import React from 'react'
import {Cores} from '../constantes/cores'

const CriarCliente = () => {
    return(
        <div style={{background: Cores.secundaria}}>
            <div style={{background: Cores.secundariaEscura}}>
                <form className="criarCliente-form">
                    <input placeholder="Nome do Cliente"/>
                    <input placeholder="CPS"/>
                    <input placeholder="Celular"/>
                </form>
            </div>
        </div>
    )
}

export default CriarCliente;