import React from 'react'
import './style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function onTop(){
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
}
function activeLang(){
    let lang = document.querySelectorAll('.lang');
    lang.forEach(e => {
        e.className === 'lang' ? e.className = 'lang active-lang' : e.className === 'lang active-lang' ? e.className='lang':null
    })
}
const  Footer=()=>{
    return(
        <footer className='color-grey' >
            <div className="footer">
                <div className='up' onClick={onTop} >
                    <a className='up-a' >up</a><span><i className="up-arrow "></i></span>
                </div>
                <div className='navigation-bottom'>
                    <div className='container-navigation' >
                        <div className='language'>
                        <ul>
                            <li className='lang' onClick={activeLang} ><a href='#' className='color-grey'>DE</a></li>
                            <li className='lang active-lang' onClick={activeLang}><a href='#' className='color-grey' >EN</a></li>
                        </ul>
                        </div>
                        <div className="link">
                            <ul className='icon'>
                                <li><a className='color-grey'><FontAwesomeIcon icon={['fab','facebook']} ></FontAwesomeIcon></a></li>
                                <li><a className='color-grey'><FontAwesomeIcon icon={['fab','twitter']} ></FontAwesomeIcon></a></li>
                                <li><a className='color-grey'><FontAwesomeIcon icon={['fab','instagram']} ></FontAwesomeIcon></a></li>
                                <li><a className='color-grey'><FontAwesomeIcon icon={['fab','youtube']} ></FontAwesomeIcon></a></li>
                                <li><a className='color-grey'><FontAwesomeIcon icon={['fab','google-plus']} ></FontAwesomeIcon></a></li>
                            </ul>
                        </div>
                    </div>
                    <nav >
                        <ul className='nav '>
                            <li><a className='color-grey'>Company</a></li>
                            <li><a className='color-grey'>Media</a></li>
                            <li><a className='color-grey'>Provider</a></li>
                            <li><a className='color-grey'>Privacy</a></li>
                            <li><a className='color-grey'>Legal</a></li>
                            <li><a className='color-grey'>Cookies</a></li>
                            <li><a className='color-grey'>Career</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer