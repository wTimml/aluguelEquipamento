import React from 'react'
import {Home, AddBox, Book, LibraryBooks} from '@material-ui/icons'

const Sidenav = () => {
    return(
        <div className="sidenav">
            <div className="sidenav-home">
                <a href="/"><Home className='sidenav-icons' style={{fontSize:20}}/> Home</a>
            </div>

            <div className="sidenav-dropdown1">
                <a href="#"><AddBox className='sidenav-icons' style={{fontSize:20}}/> Cadastrar</a>
                <div id="sidenav-dropdown1" className="sidenav-dropdown-content1">
                    <a href="/">Cliente</a>
                    <a href="/">Departamento</a>
                    <a href="/">Item</a>
                    <a href="/">Equipamento</a>
                </div>
            </div>

            <div className="sidenav-dropdown2">
                <a href="/" className="bar-item button"><Book className='sidenav-icons' style={{fontSize:20}}/> Reservar</a>
            </div>

            <div className="sidenav-dropdown3">
                <a href="/" className="bar-item button"><LibraryBooks  className='sidenav-icons' style={{fontSize:20}}/> Equipamentos</a>
            </div>
        </div>
    )
}

export default Sidenav;