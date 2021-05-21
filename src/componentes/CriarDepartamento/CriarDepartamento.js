import React, {useState} from 'react'
import {Cores} from '../../constantes/cores'

const CriarDepartamento = () => {

    const [departamento, setDepartamento] = useState({
         nome:'' 
        })

    const handleChange = (prop) => (event) => {
        setDepartamento({ ...departamento, [prop]: event.target.value });
    }

    const handleSubmit = () => {

    }

    const styles = ({
        background: Cores.primariaClara
    })
    
    return(
        <form onSubmit={handleSubmit} style={styles}>
            <input
                fullWidth
                label='Nome'
                placeholder='Nome'
                onChange={handleChange('nome')}
                value={departamento.nome}
                />
        </form>
    )
}

export default CriarDepartamento;