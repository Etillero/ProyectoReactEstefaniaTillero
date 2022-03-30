import React from 'react'
import Nav from './Nav'

function Header() {
    const links = [
        "Star Wars Card", "Contactos", 
    ]
    return (
        <div>
        <Nav links ={links} />
    </div>
    )
}

export default Header
