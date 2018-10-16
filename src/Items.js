import React from 'react';
import Item from './Item';
import './style/Items.css'

 
const Items =(props)=>{
         return(
             <div className='item ' >
                <h3> {props.title}</h3>
                <div className={props.class}>
                    {props.param.map((e,index)=>{
                        return(<Item  clickl={props.clickl} clickr={props.clickr} src={e.src} title={e.title} text={e.text} href={e.href} index={index} key={index} parent={props.grandparent} var={e.var} ></Item>)
                    })}
                </div>
             </div>
         )
     
 }
 export default  Items 