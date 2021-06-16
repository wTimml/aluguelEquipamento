import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import api from '../../Service/api'

const CriarCliente = (id = 0) => {

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
        logradouro: 'Rua',
        complemento: 'Complemento',
        bairro: 'Bairro',
        localidade: 'Cidade',
        uf: 'UF',
        numero: 'Nr'
    })

    const [aviso, setAviso] = useState({

        aviso: ''
    })

    const handleChange = (prop) => (event) => {
        setCliente({ ...cliente, [prop]: event.target.value });
    }
    const handleChangeEndereco = (prop) => (event) => {
        setEndereco({ ...endereco, [prop]: event.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if( id === 0) api
        .post('/clientes', cliente)
            .then(response => setCliente(cliente.id = response.data.id));
        else api
        .put('/clientes/'+ id, cliente).then(response => console.log(response.status));
    }

    const atualizarEndereco = async e => {
        e.preventDefault();
        if (endereco.cep.length === 8) {
            var resposta = await (await axios.get('https://viacep.com.br/ws/' + endereco.cep + '/json')).data;
            
            setEndereco({
                ...endereco,
                bairro: resposta.bairro,
                localidade: resposta.localidade,
                logradouro: resposta.logradouro,
                uf: resposta.uf,
                complemento: resposta.complemento
            });
            setAviso({...aviso, aviso: ""})
        }
        else {
            setAviso({...aviso, aviso: "Cep inválido"})
        }
    }

    if(id === 0) {
        setCliente({...cliente,
        id: 0,
        nome: 'Nome',
        rg: 'Rg',
        cpf: 'Cpf',
        endereco: '',
        telefone: 'Telefone'
        })
    }
    else {
        api.get('/clientes/'+ id).then(response => setClientes({...cliente, cliente: response.data}))
    }

    return (<>
        <h1>Cadastrar Cliente</h1>
        <form className="clienteForm" onSubmit={handleSubmit}>
            <div className='inputBackground'>
                <div>
                    <input
                        label='Nome'
                        placeholder={cliente.nome}
                        onChange={handleChange('nome')}
                    />
                </div>
                <div className='row'>
                    <input
                        label='Rg'
                        placeholder={cliente.rg}
                        maxLength='11'
                        onChange={handleChange('rg')}
                    />
                    <input
                        label='Cpf'
                        placeholder={cliente.cpf}
                        maxLength='11'
                        onChange={handleChange('cpf')}
                    />
                </div>
                <div>
                    <input
                        label='Telefone'
                        placeholder={cliente.telefone}
                        onChange={handleChange('telefone')}
                    />
                </div>
                <div>
                    <input
                        label='Cep'
                        placeholder={cliente.cep}
                        onChange={handleChangeEndereco('cep')}
                        style={{ width: '30%' }}
                        maxLength='8'
                    />
                    <FindReplaceIcon onClick={atualizarEndereco} className='simpleButton' />
                    <input
                        label='Logradouro'
                        placeholder={endereco.logradouro}
                        onChange={handleChangeEndereco('logradouro')}
                    />
                    <input
                        label='Numero'
                        placeholder={endereco.numero}
                        onChange={handleChangeEndereco('Nr')}
                        style={{ width: '10%' }}
                    />
                </div>
                <div className='row'>
                    <input
                        label='Bairro'
                        placeholder={endereco.bairro}
                        onChange={handleChangeEndereco('bairro')}
                    />
                    <input
                        label='Cidade'
                        placeholder={endereco.localidade}
                        onChange={handleChangeEndereco('localidade')}
                    />
                    <input
                        label='UF'
                        placeholder={endereco.uf}
                        onChange={handleChangeEndereco('uf')}
                        maxLength='2'
                        style={{ width: '20%' }}
                    />
                </div>
                <div>
                    <input
                        label='Complemento'
                        placeholder= {endereco.complemento}
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