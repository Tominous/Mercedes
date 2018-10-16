import React from 'react'
import './style/HRtext.css'
 const HRtext=(props)=>{
     return(
         <div className='hr-text'>
            <h4 className='color-gray'>{props.title}</h4>
            <hr className='under-line'></hr>
            <h3>{props.subtitle}</h3>
            {props.children}
        </div>
     )
 }
 export default HRtext;