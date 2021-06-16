import React, { useEffect, useState } from 'react'
import api from '../../Service/api';
import './styles.css'

const CriarDepartamento = () => {

    const [departamento, setDepartamento] = useState({
        id: 0,
        nome: ''
    })

    const [aviso, setAviso] = useState({

        aviso: ''
    })

    const handleChange = (prop) => (event) => {
        setDepartamento({ ...departamento, [prop]: event.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        api
            .post('/departamentos', departamento)
            .then(response => setDepartamento(departamento.id = response.data.id));
    }

    return (<>
        <h1>Cadastrar Departamento</h1>
        <form onSubmit={handleSubmit}>
            <div className='inputBackground'>
                <div>
                    <input
                        label='Nome'
                        placeholder='Nome'
                        onChange={handleChange('nome')}
                        />

                </div>
            </div>
            <div className='row'>
                <div className='error'>{aviso.aviso}</div>
                <button type='submit'> Criar </button>
            </div>

        </form>
    </>
    )
}

export default CriarDepartamento;