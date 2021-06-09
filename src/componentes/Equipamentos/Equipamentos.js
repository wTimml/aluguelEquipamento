import React from 'react'
import ListaDados from './ListaDados'
import Card1 from '../Cards/Card1'

const Equipamentos = () =>{
    
    let date = new Date();

    const equipamento =[
        { 
            id : 0,
            nome:'Zézin',
            devolucao:'15/05/2021',
            status:'Atrasado'
        },{
            id : 1,
            nome:'jujusjai',
            devolucao:'15/06/2021',
            status:'Aguardando'
        }
    ]

    console.log(equipamento[0])

    return(

        <div style={{height:'100vh'}}>
            <div className="container">
                
                    <text style={{color:'white'}}>Equipamentos Disponiveis</text>
                    <div className='container_list' style={{width:'300px'}}>
                        <div className='container_list_info'>
                            <text className="textContainer">Cadeira de Rodas</text>    
                        </div>
                    </div>
            </div>
            <div className="container">
                <text style={{color:'white'}}>Devoluções para hoje - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</text>
                <div className='container_list'>
                    {
                        equipamento.map((equips) => {
                            return <ListaDados nome={equips.nome} devolucao={equips.devolucao} status={equips.status}/>
                        })
                    }
                </div>
            </div>

            <div className="container">
                <text style={{color:'white'}}>Equipamentos Atrasados</text>
                <div className='container_list'>
                    {
                        equipamento.map((equips) => {
                            return <ListaDados nome={equips.nome} devolucao={equips.devolucao} status={equips.status}/>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Equipamentos;