import React from 'react'
import Menu from './Menu'
import './style/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Header extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(       
             <header className='margin' >
                 <div className='logo'>
                    <a href='#'>
                        <img src='https://www.mercedes-amg.com/etc/clientlibs/amg/amg.base/assets/images/svg/amg-logo.svg'></img>                    
                    </a>
                 </div>
                 <div className='menu'>
                    <div className='navigation'>
                        <ul>
                            <li><a> <FontAwesomeIcon icon={['fas','info']} ></FontAwesomeIcon> Provider/Privacy</a></li>
                            <li><a><FontAwesomeIcon icon={['fas','user']} ></FontAwesomeIcon> Login</a></li>
                            <li><a><FontAwesomeIcon icon={['fas','search']} ></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                    <Menu/>
                 </div>
             </header>
        )
    }
}
export default Header;