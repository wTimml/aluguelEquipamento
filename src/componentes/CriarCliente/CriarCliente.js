import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'
import FindReplaceIcon from '@material-ui/icons/FindReplace';

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
        logradouro: 'Rua',
        complemento: 'Complemento',
        bairro: 'Bairro',
        localidade: 'Cidade',
        uf: 'UF',
        numero: 'Nr'
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
        }
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
                        label='Cep'
                        placeholder='Cep'
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