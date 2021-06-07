import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
const Navbar = () => {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    }
    else {
        setButton(true);
    }
};
useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton)


    return ( 
    
            <nav className="navbar">
<div className="navbar-container">
<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>


<i class="fas fa-sun"/> SOLSTICIO <i class="fas fa-moon"/>

</Link>
<div className="menu-icon" onClick={handleClick}>

<i className={click ? 'fas fa-times' : 'fas fa-bars'} />

</div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>


<li className="nav-item">

<Link to="/Encuentro" className="nav-links" onClick={closeMobileMenu}>

Alba
</Link>

</li>
<li className="nav-item">

<Link to="/Suerte" className="nav-links" onClick={closeMobileMenu}>

   Ocaso
</Link>

</li>

<li className="nav-item">

<Link to="/Destino" className="nav-links" onClick={closeMobileMenu}>

    Destino
</Link>

</li>


</ul>



</div>



            </nav>
    
    )
}

export default Navbar
