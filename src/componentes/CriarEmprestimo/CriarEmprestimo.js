import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'

const CriarEmprestimos = ({id = 0}) => {
    
    const [aviso, setAviso] = useState({

        aviso: ''
    })

    const [emprestimo, setEmprestimo] = useState({
        id: 0,
        atendente:{},
        cliente:{},
        dataInicial: "0001-01-01",
        dataFinal: "0002-02-02",
        dataDevolucao:"0003-03-03",
        retirado: false,
        produto:{}
    })

    const [atendente, setAtendente] = useState({
        id: 0,
        nome: '',
        rg: '',
        cpf: '',
        endereco: '',
        telefone: ''
    })

    const [clienate, setCliente] = useState({
        id: 0,
        nome: '',
        rg: '',
        cpf: '',
        endereco: '',
        telefone: ''
    })

    return<>
        <h1>Cadastrar Departamento</h1>
        <form /*onSubmit={handleSubmit}*/>
            <div className='inputBackground'>
                <input
                    label='Nome'
                    placeholder='Nome'
                    //onChange={handleChange('nome')}
                />
            </div>
            <div className='row'>
                <div className='error'>{aviso.aviso}</div>
                <button type='submit'> Criar </button>
            </div>

        </form>
    </>
}
export default CriarEmprestimos;