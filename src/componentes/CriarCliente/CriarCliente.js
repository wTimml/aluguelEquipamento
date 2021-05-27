import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'

const CriarCliente = () => {

    const [cliente, setCliente] = useState({

        id: 0,
        nome: '',
        rg: '',
        cpf: '',
        endereco: '',
        telefone: ''
    })

    const [endereco, setEndereco] = useState({

        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: ''
    })

    const [aviso, setAviso] = useState({

        aviso: 'Mensagem de aviso'
    })

    const handleChange = (prop) => (event) => {
        setCliente({ ...cliente, [prop]: event.target.value });
    }
    const handleChangeEndereco = (prop) => (event) => {
        setEndereco({ ...endereco, [prop]: event.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:8080/clientes', cliente)
            .then(response => setCliente(cliente.id = response.data.id));
    }

    return (<>
        <h1>Cadastrar Cliente</h1>
        <form className="clienteForm" onSubmit={handleSubmit}>
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
                        maxLength='11'
                        onChange={handleChange('rg')}
                    />
                    <input
                        label='Cpf'
                        placeholder='CPF'
                        maxLength='11'
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
                <div>
                    <input
                        label='Logradouro'
                        placeholder='Rua'
                        onChange={handleChangeEndereco('logradouro')}
                    />
                    <input
                        label='Numero'
                        placeholder='Numero'
                        onChange={handleChangeEndereco('logradouro')}
                        style={{ width: '10%' }}
                    />
                </div>
                <div className='row'>
                    <input
                        label='Bairro'
                        placeholder='Bairro'
                        onChange={handleChangeEndereco('bairro')}
                    />
                    <input
                        label='Cidade'
                        placeholder='Cidade'
                        onChange={handleChangeEndereco('localidade')}
                    />
                    <input
                        label='UF'
                        placeholder='UF'
                        onChange={handleChangeEndereco('uf')}
                        maxLength='2'
                        style={{ width: '20%' }}
                    />
                </div>
                <div>
                    <input
                        label='Complemento'
                        placeholder='Complemento'
                        onChange={handleChangeEndereco('complemento')}
                    />
                </div>
            </div> {/*inputBackground */}
            <div className='row'>
                <div className='error'>{aviso.aviso}</div>
                <button type='submit'> Cadastrar </button>
            </div>

        </form>
    </>
    )
}

export default CriarCliente;