import { RestorePageOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import api from '../../Service/api';
import './styles.css'

const CriarDepartamento = ({ id= 0 }) => {

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
        if(id === 0)api
            .post('/departamentos', departamento)
            .then(response => setDepartamento(departamento.id = response.data.id));
        else {
            api.put('/departamentos/' + id, departamento).then(response => console.log(response.status))
        }
    }


    useEffect(() => {
        if (id === 0) setDepartamento({ ...departamento, nome: "Nome" })
        else {
            api.get('/departamentos/' + id).then(response => setDepartamento({ ...departamento, id: response.data.id, nome: response.data.nome }))
        }
    }, [])


    return (<>
        <h1>Cadastrar Departamento</h1>
        <form onSubmit={handleSubmit}>
            <div className='inputBackground'>
                <div>
                    <input
                        label='Nome'
                        placeholder={departamento.nome}
                        onChange={handleChange('nome')}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='error'>{aviso.aviso}</div>
                <button type='submit'> Salvar </button>
            </div>

        </form>
    </>
    )
}

export default CriarDepartamento;