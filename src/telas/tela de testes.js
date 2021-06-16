import React from 'react';
import Criar from '../componentes/CriarEmprestimo/CriarEmprestimo'
import CriarDepartamento from '../componentes/CriarDepartamento/CriarDepartamento';
import CriarProduto from '../componentes/CriarProduto/CriarProduto'
import Listar from '../componentes/Listar/Listar'

export const TelaTestes = ()=>{
    return(
        <div>
            <CriarProduto />
            <CriarDepartamento/>

            <Listar link='itens' />
        </div>
    )
}
export default TelaTestes;