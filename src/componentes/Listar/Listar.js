import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'
import DeleteIcon from '@material-ui/icons/Delete';
import BuildIcon from '@material-ui/icons/Build';
import Modal from '../Modal/Modal'

//exceto emprestimos

const Listar = ({ link }) => {

    let [dados, setDados] = useState([
        {
            id: 0
        }
    ])

    const [aviso, setAviso] = useState({

        aviso: ''
    })

    const [isModalVisible, setIsModalVisible] = useState(false);

    const getData = async e => {
        await axios.get('http://localhost:8080/' + link)
            .then(response => setDados(dados = response.data));
    }

    const handlePut = (id, dado) => async e => {
        e.preventDefault();
        setIsModalVisible(true);
        //submitPut(id, dado);
    }

    const submitPut = (id, dado) => async e => {
        e.preventDefault();
        try{
            await axios.put('http://localhost:8080/' + link + "/" + id, dado);
        }
        catch {
            setAviso({ ...aviso, aviso: 'Erro interno, verifique a API' });
        } 
    }

    const handleDelete = (id) => async e => {
        e.preventDefault();
        try{
            await axios.delete('http://localhost:8080/' + link + "/" + id);
        }
        catch {
            setAviso({ ...aviso, aviso: 'Erro interno, verifique a API' });
        } 
    }

    useEffect(() => {
        getData();
    }, [])

    return <>
        {isModalVisible ?
          <Modal onClose = {() => setIsModalVisible(false)}>
            
          </Modal>
          : null}
        <form>
            <div className='inputBackground'>
                {dados.map((dado) => {
                    return <div className='lista' key={dado.id}>
                        <div className='listaItem'>{dado.nome}</div>
                        <BuildIcon className='simpleButton' onClick={handlePut(dado.id, dado)}/>
                        <DeleteIcon className='simpleButton' onClick={handleDelete(dado.id)} />
                    </div>
                })}
            </div>
            <div className='row'>
                <div className='error'>{aviso.aviso}</div>
            </div>
        </form>
    </>
}

export default Listar;