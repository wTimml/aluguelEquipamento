import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './styles.css'

const CriarCliente = () => {

    const [cliente, setCliente] = useState({
            id: 0,
            nome:'',
            rg:'',
            cpf:'',
            endereco:'',
            telefone:''
        })

    const [aviso, setAviso] = useState({

        aviso:'Mensagem de aviso'
    })

    const handleChange = (prop) => (event) => {
        setCliente({ ...cliente, [prop]: event.target.value });
    }

    const handleSubmit = () => {
        useEffect( () => {
            axios.post('http://localhost:8080/clientes', cliente)
                .then(response => setCliente(cliente.id= response.data.id));

        }, [])
    }
    
    return(
        <form className="clienteForm" onSubmit={(event) => handleSubmit(event)}>
            <div className='inputBackground'> 
                <div>
                    <input
                        label='Nome'
                        placeholder='Nome'
                        onChange={handleChange('nome')}
                    />
                </div>
                <div className='row'>
                    <input
                        label='Rg'
                        placeholder='RG'
                        onChange={handleChange('rg')}
                        />
                    <input
                        label='Cpf'
                        placeholder='CPF'
                        onChange={handleChange('cpf')}
                    />
                </div>
                <div>
                    <input
                        label='Telefone'
                        placeholder='Telefone'
                        onChange={handleChange('telefone')}
                        
                    />
                </div>
            </div>
            <div className='row'>
                <div className='error'>{aviso.aviso}</div>
                <button type='submit'> Cadastrar </button>    
            </div>
            
        </form>
    )
}

export default CriarCliente;