import React from 'react'
import Header from './Header'
import './style/App.css'
import Content from './Content'
import Footer from './Footer'
import Info from './Info'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fab,fas)
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(      
            <div className='main' >
                <Header/>
                <Content/>
                <Footer/>
                <Info/>
            </div>
      )
    }
}