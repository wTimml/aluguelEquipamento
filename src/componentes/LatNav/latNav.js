import React, { useEffect, useState } from 'react'
import './styles.css'

const latNav = () => {

    const[toggle, setToggle] = useState(false)

    const handleOutsideClick = (e) => {
        if(e.target.id === 'sidenav') setToggle(true)
        else setToggle(false)
    }

    const LatNavMenu = () => {
        if(toggle) return <div id='restoDaTela' onClick={handleOutsideClick}>
                <div className='sidenavOpen' id='sidenav'>
                    <a href="#">'icon' Clientes</a>
                    <a href="#">'icon' Produtos</a>
                    <a href="#">'icon' Emprestimo</a>
                </div>
            </div>
        else 
            return <div className='sidenavClose' id='sidenav' onClick={handleOutsideClick}>
                <a href="#">'icon'</a>
                <a href="#">'icon'</a>
                <a href="#">'icon'</a>
            </div>   
    }

    return (
        <div >
            <LatNavMenu /> 
        </div>
    )
}

export default latNav;