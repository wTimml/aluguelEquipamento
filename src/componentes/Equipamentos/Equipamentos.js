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
                <button href="#" onClick={console.log('x')}>Reservar Equipamento</button>
            </div>

            <div className="container">
                    <div style={{flexDirection:'row',width:'300px', justifyContent:'space-between', display:'flex'}}>
                        <text style={{color:'white'}}>Equipamentos Disponiveis</text>
                        <a href='#' style={{color:'white', fontSize:'12px', alignSelf:'center'}}>Ver Todos</a>
                    </div>
                    <div className='container_list' style={{width:'300px'}}>
                        <div className='container_list_info'>
                            <text className="textContainerFixWidth">Hospitalares (XX)</text>    
                            <text className="textContainerFixWidth">Eletrônicos (XX)</text>    
                        </div>
                    </div>
            </div>
            <div className="container">
                <div style={{flexDirection:'row',width:'100vh', justifyContent:'space-between', display:'flex'}}>
                    <text style={{color:'white'}}>Devoluções para hoje - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</text>
                    <a href='#' style={{color:'white', fontSize:'12px', alignSelf:'center'}}>Ver Todos</a>
                </div>
                <div className='container_list'>
                    {
                        equipamento.map((equips) => {
                            return <ListaDados nome={equips.nome} devolucao={equips.devolucao} status={equips.status}/>
                        })
                    }
                </div>
            </div>

            <div className="container">
                <div style={{flexDirection:'row',width:'100vh', justifyContent:'space-between', display:'flex'}}>
                    <text style={{color:'white'}}>Equipamentos Atrasados</text>
                    <a href='#' style={{color:'white', fontSize:'12px', alignSelf:'center'}}>Ver Todos</a>
                </div>
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