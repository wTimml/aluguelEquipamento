import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './styles.css'
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import ClearIcon from '@material-ui/icons/Clear';
import api from '../../Service/api';

const CriarProduto = ({ id = 0 }) => {

    const [itemToSearch, setItemToSearch] = useState({
        item: ''
    })

    const [compHandler, setCompHandler] = useState({
        itemSelected: false
    })

    const [produto, setProduto] = useState({
        id: 0,
        nome: 'Nome',
        descricao: 'Descrição',
        item: {
            id: 0,
            nome: 'Nome',
            departamento: '',
            caracteristicas: []
        },
        caracteristicas: [],
        disponivel: true
    })

    let [itens, setItens] = useState([])

    const [aviso, setAviso] = useState({

        aviso: ''
    })

    useEffect(() => {
        if(id !== 0) {
            api.get('/produtos/'+ id).then(response => setProduto(response.data))
        }
    }, [])

    const getItens = async e => {
        e.preventDefault();
        if (itemToSearch.item === "" || itemToSearch.item === null || itemToSearch.item === undefined || itemToSearch.item === " ") {
            await axios.get('http://localhost:8080/itens/')
                .then(response => setItens(itens = response.data));
        } else {
            await axios.get('http://localhost:8080/itens/nome/' + itemToSearch.item)
                .then(response => setItens(itens = response.data));
        }
    }

    const handleChange = (prop) => (event) => {
        setProduto({ ...produto, [prop]: event.target.value });
    }

    const handleSearchChange = () => (event) => {
        setItemToSearch({ ...itemToSearch, item: event.target.value });
    }

    const handleSubmit = async e => { 
        e.preventDefault();

        if(id === 0) {
        var resp = await axios.post('http://localhost:8080/produtos/', produto)
            setProduto({...produto, id: resp.data.id})
            console.log(resp.status)
        } 
        else {
            var resp = await axios.put('http://localhost:8080/produtos/'+ id, produto)
            console.log('http://localhost:8080/produtos/'+ id)
            console.log(resp.status)
        }
    }

    const handleItemSelect = (item) => async e => {
        e.preventDefault();
        setProduto({ ...produto, item: item });
        setCompHandler({ ...compHandler, itemSelected: true })
    }

    const showSearchResults = () => {
        if (itens.length > 0) {
            return <div className='itensContainer'>{itens.map((itens) => {
                return <div className='itensSelector' key={itens.id} onClick={handleItemSelect(itens)}>{itens.nome}</div>
            })}
            </div>
        } else return <></>
    }

    const itemSearchBar = () => {
        return <>
            <div>
                <input
                    label='Item'
                    placeholder={produto.item.nome}
                    onChange={handleSearchChange()}
                />
                <FindReplaceIcon onClick={getItens} className='simpleButton' />
            </div>
            {showSearchResults()}
        </>
    }

    const handleAddCaracteristicas = (car) => (e) => {
        e.preventDefault();
        if (!produto.caracteristicas.includes(car)) {
            produto.caracteristicas.push(car);
            setAviso({ ...aviso, aviso: '' });
        }
        else {
            setAviso({ ...aviso, aviso: 'Verifique as caracterisitcas!' });
        }
    }

    const removeCaracteristica = (x) => (e) => {
        e.preventDefault();
        if (produto.caracteristicas.includes(x)) {
            produto.caracteristicas.splice(produto.caracteristicas.indexOf(x), 1)

            setAviso({ ...aviso, aviso: '' });
        }
    }

    const selecionarOutroItem = (e) => {
        e.preventDefault();
        setProduto({
            ...produto, item: {
                id: 0,
                nome: '',
                departamento: '',
                caracteristicas: []
            },
            caracteristicas: []
        })
        setCompHandler({...compHandler, itemSelected: false})
    }
    const caracSelector = () => {
        return <>
            <div>
                <input
                    label="Item Selecionado"
                    placeholder={produto.item.nome}
                    readOnly
                    className='inputItem'
                />
                <ClearIcon onClick={selecionarOutroItem} className='simpleButton' />
            </div>
            <h4>Selecione as caracteristicas do produto</h4>
            <div className='caracsContainer'>
                {produto.item.caracteristicas.length === produto.caracteristicas.length ?
                    <div className='flexStart'><p>Você selecionou todas as caracterisitcas</p></div>
                    : <></>
                }
                {produto.item.caracteristicas.map((car) => {

                    if (!produto.caracteristicas.includes(car)) {
                        return <div className='itensSelector' key={car.id} onClick={handleAddCaracteristicas(car)}>{car.nome}</div>
                    } else return <div key={car.id}></div>
                })}
            </div>
            <h4>Caracterisitcas selecionadas</h4>
            <div className='caracsContainer'>
                {produto.caracteristicas.length > 0 ? <>
                    {produto.caracteristicas.map((car) => {
                        return <div className='itensSelector' key={car.id} onClick={removeCaracteristica(car)}>{car.nome}</div>
                    })}
                </>
                    :
                    <div className='flexStart'><p>Selecione uma caracteristica</p></div>
                }
            </div>
        </>
    }


    return (<>
        <h1>Cadastrar Produto</h1>
        <form onSubmit={handleSubmit} className='criarProduto'>
            <div className='inputBackground'>
                <div className="column">
                    <div>
                        <input
                            label='Nome'
                            placeholder={produto.nome}
                            onChange={handleChange('nome')}
                        />
                    </div>
                    <div>
                        <input
                            label='Descrição'
                            placeholder={produto.descricao}
                            onChange={handleChange('descricao')}
                        />
                    </div>
                    {compHandler.itemSelected ? caracSelector() : itemSearchBar()}

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

export default CriarProduto;