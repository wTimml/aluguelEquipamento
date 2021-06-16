import React from 'react';
import Botao1 from '../componentes/botoes/botao1'
import CriarItem from '../componentes/CriarItem/CriarItem'
import CriarDepartamento from '../componentes/CriarDepartamento/CriarDepartamento'
import CriarProduto from '../componentes/CriarProduto/CriarProduto';
import Listar from '../componentes/Listar/Listar'

export const TelaTestes = ()=>{
    return( <>
            <CriarProduto />
            <Listar link='produtos'><CriarProduto /></Listar>
            </>
    )
}
export default TelaTestes;