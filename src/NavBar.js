import React from 'react';

export default function NavBar({children}) {
    return (
        <div className='nav-bar'>
            <div className='logo-title-box'>
                <img className='logo' src='img/house-icon1.png' alt='logo'/>
                <h3>Smart Home Energy Manager</h3>
            </div>  
            {children}
        </div>
    )
}