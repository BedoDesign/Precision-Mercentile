import React from 'react'
import '../Navbar/navbar.css'
import { asset } from '../../assets/asset'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="icon-head">
                <img className="logo" src={asset.logo} alt="" />
                <h2 className='icon-header'>Admin Panel</h2>
            </div>

            <img className="profile" src={asset.profile} alt="" />

        </div>
    )
}

export default Navbar
