import React from 'react'
import './style/Menu.css'
const Menu =()=>{
    return(
        <div className='main-nav'>
            <ul>
                <li><a className='nonhover' >Driving Performance</a>
                    <ul className='submenu'>
                        <li className='border' ><a className='nonhover' href="">AMG The Story</a></li>
                        <li><a className='nonhover' href="">AMG One Attribute</a></li>
                        <li><a className='nonhover' href="">AMG Future Performance</a></li>
                        <li><a className='nonhover' href="">AMG The Company</a></li>
                    </ul>
                </li>
                <li><a className='nonhover' >Vehicles</a>
                </li>
                <li><a className='nonhover'>Experience</a>
                    <ul className='submenu'>
                        <li className='border'><a className='nonhover' href="">AMG Driving Academy</a></li>
                        <li><a className='nonhover' href="">AMG Private Lounge</a></li>
                        <li><a className='nonhover' href="">AMG Performance Center</a></li>
                        <li><a className='nonhover' href="">AMG Factory Tour</a></li>
                        <li><a className='nonhover' href="">AMG Motorsports</a></li>
                        <li><a className='nonhover' href="">AMG Partners</a></li>
                        <li><a className='nonhover' href="">AMG Performance Wear</a></li>
                    </ul>
                </li>
                <li><a className='nonhover' >Get your AMG</a>
                    <ul className='submenu'>
                        <li className='border'><a className='nonhover' href="">Dealer Locator</a></li>
                        <li><a className='nonhover' href="">Configurator</a></li>
                    </ul>
                </li>
                <li><a className='nonhover' >Owner</a>
                    <ul className='submenu'>
                        <li className='border'><a className='nonhover' href="">AMG Private Lounge</a></li>
                        <li><a className='nonhover' href="">AMG Project ONE</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
export default Menu;