import React from 'react'

const Sidenav = () => {
    return(
        <div className="sidenav">
            <div className="sidenav-dropdown">
                <h3 className="bar-item">Menu</h3>
                <a className="bar-item button">link</a>
                <div id="sidenav-dropdown" className="sidenav-dropdown-content">
                    <a href="#">Link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </div>
                <a className="bar-item button">link</a>
                <a className="bar-item button">link</a>
            </div>
        </div>
    )
}

export default Sidenav;