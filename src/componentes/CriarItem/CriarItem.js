import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './styles.css'

const CriarItem = () => {

    const [item, setItem] = useState({

        id: 0,
        nome: '',
        departamento: '',
        caracteristicas: []
    })

    const [caracteristicas, setCaracteristicas] = useState(
        {
            nome: ''
        }
    )

    const [departamentos, setDepartamentos] = useState([
        {
            id: 1,
            nome: "departamento 1"
        },
        {
            id: 2,
            nome: "departamento 2"
        }]
    )

    const [aviso, setAviso] = useState({

        aviso: ''
    })

    /*useEffect(() => {
            await axios.get('http://localhost:8080/departamentos')
                .then(response => setDepartamento(departamento = response));
        }, [])*/

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.departamento === null || item.departamento === undefined || item.departamento === '') {

            setAviso({ ...aviso, aviso: 'Selecione um departamento!' });
        }
        else {
            setAviso({ ...aviso, aviso: '' });
            console.log(item)

            //axios.post etc
        }
    }

    const handleChange = (prop) => (event) => {
        setItem({ ...item, [prop]: event.target.value });
    }

    const handleChangeSelect = () => (event) => {
        setItem({ ...item, departamento: departamentos[event.target.value - 1] });
    }

    const handleChangeCar = () => (event) => {
        setCaracteristicas({ ...caracteristicas, nome: event.target.value });
    }

    const handleAddCaracteristicas = (e) => {
        e.preventDefault();
        if (!item.caracteristicas.includes(caracteristicas.nome)) {
            item.caracteristicas.push(caracteristicas);
            setAviso({ ...aviso, aviso: '' });

        }
        else {
            setAviso({ ...aviso, aviso: 'Verifique as caracterisitcas!' });
        }
    }

    const removeCaracteristica = (x) => (e) => {
        e.preventDefault();
        if (item.caracteristicas.includes(x)) {
            item.caracteristicas.splice(item.caracteristicas.indexOf(x), 1)

            setAviso({ ...aviso, aviso: '' }); //força renderização do componente
        }
    }

    const ShowCaracteristicas = () => {

        if (item.caracteristicas.length > 0) {
            return <div className='caracteristicasContainer'>{item.caracteristicas.map((carac) => {
                return <div className='caracteristicasItem' onClick={removeCaracteristica(carac)}>{carac.nome}</div>
            })}
            </div>
        }
        else {
            return <div></div>
        }
    }

    return (<>
        <h1>Cadastrar Item</h1>
        <form className="itemForm" onSubmit={handleSubmit}>
            <div className='inputBackground'>
                <div className='column'>
                    <div>
                        <input
                            label='Nome'
                            placeholder='Nome'
                            onChange={handleChange('nome')}
                        />
                    </div>
                    <select onChange={handleChangeSelect()}>
                        <option value={null}>Selecionar departamento</option>
                        {departamentos.map((dep) => {
                            return (
                                <option key={dep.id} value={dep.id}>{dep.nome}</option>
                            );
                        })}
                    </select>

                    <div className='column'>
                        <div className='row'>
                            <input
                                label='categoria'
                                placeholder='Adicionar categoria'
                                onChange={handleChangeCar()}
                            />
                            <button className="addButton" onClick={handleAddCaracteristicas}>+</button>
                        </div>

                        {ShowCaracteristicas()}

                    </div>

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

export default CriarItem;