import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './styles.css'

const CriarDepartamento = () => {

    const [departamento, setDepartamento] = useState({
            id: 0,
            nome:'' 
        })

    const [aviso, setAviso] = useState({

        aviso:'Mensagem de aviso'
    })

    const handleChange = (prop) => (event) => {
        setDepartamento({ ...departamento, [prop]: event.target.value });
    }

    const handleSubmit = () => {
        useEffect( () => {
            axios.post('http://localhost:8080/departamentos', departamento)
                .then(response => setDepartamento(departamento.id= response.data.id));

        }, [])
    }
    
    return(
        <form onSubmit={(event) => handleSubmit(event)}>
    
            <input
                label='Nome'
                placeholder='Nome'
                onChange={handleChange('nome')}
                />
                <div className='row'>
                    <div className='error'>{aviso.aviso}</div>
                    <button type='submit'> Criar </button>    
                </div>
            
        </form>
    )
}

export default CriarDepartamento;