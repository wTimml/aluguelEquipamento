import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './styles.css'
import api from '../../Service/api';

const CriarItem = ({ id = 0 }) => {

    const [item, setItem] = useState({

        id: 0,
        nome: '',
        departamento: {
            id: 0,
            nome: ''
        },
        caracteristicas: []
    })

    const [caracteristicas, setCaracteristicas] = useState(
        {
            nome: ''
        }
    )

    let [departamentos, setDepartamentos] = useState([])

    const [aviso, setAviso] = useState({

        aviso: ''
    })

    async function getDepartamentos() {
        await axios.get('http://localhost:8080/departamentos')
            .then(response => setDepartamentos(departamentos = response.data));
    }

    useEffect(() => {

        getDepartamentos();
        if (id === 0) setItem({ ...item, nome: "Nome", departamento: { nome: "Selecione um departamento" } })
        else {
            api.get('/itens/' + id).then(response => setItem({
                ...item,
                id: response.data.id,
                nome: response.data.nome,
                departamento: response.data.departamento,
                caracteristicas: response.data.caracteristicas
            }))
        }
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            if (item.departamento === null || item.departamento === undefined || item.departamento === '') {

                setAviso({ ...aviso, aviso: 'Selecione um departamento!' });
            }
            else {
                setAviso({ ...aviso, aviso: '' });
                console.log(item)
            }
            //axios.post
        } else {
            if (item.departamento === null || item.departamento === undefined || item.departamento === '') {

                setAviso({ ...aviso, aviso: 'Selecione um departamento!' });
            }
            else {
                setAviso({ ...aviso, aviso: '' });
                console.log(item)

                //axios.put 
            }
        }
    }

    let [temp, setTemp] = useState()

    const handleChange = (prop) => (event) => {
        setItem({ ...item, [prop]: event.target.value });
    }

    const handleChangeSelect = () => (event) => {
        if (id !== 0) setTemp(item.departamento)
        if (event.target.value === null) {
            if (id !== 0) setItem({ ...item, departamento: temp });
            else setItem({ ...item, departamento: departamentos[event.target.value - 1] });
        }
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
                return <div className='caracteristicasItem' key={carac.nome} onClick={removeCaracteristica(carac)}>{carac.nome}</div>
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
                            placeholder={item.nome}
                            onChange={handleChange('nome')}
                        />
                    </div>
                    <select onChange={handleChangeSelect()}>
                        <option value={null}>{item.departamento.nome}</option>
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
                <button type='submit'> Salvar </button>
            </div>
        </form>
    </>
    )
}

export default CriarItem;