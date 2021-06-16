import React from 'react'

const ListaDados = (props) =>{

    const colorStatus = () =>{
        if(props.status=="Atrasado"){
            return  'red'
        }
        return 'green'
    }
    return (
        <div className='container_list_info'>
            <text className="textContainer">{props.nome}</text>
            <text className="textContainer">{props.devolucao}</text>
            <text className="textContainer">Cadeira de Rodas</text>
        
            <text className="textContainerRight" style={{backgroundColor:colorStatus()}}>{props.status}</text>
            
        </div>

    )
}


export default ListaDados