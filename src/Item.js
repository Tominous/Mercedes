import React from 'react';
import { relative } from 'path';

const Item=(props)=>(
    <div className={props.parent} >
    
            <div>
                <a  className='nonhover' href='#'>
                    <div>
                        <img src={props.src}></img>
                    </div>
                    <h3>{props.title}</h3>
                </a>
            </div>
            <div >
                <p className='color-grey'>
                    {props.text}
                    <a href={props.href}>{props.text==null?null:'Emission Statement [1]'}</a>
                </p>
            </div>
            <button href="" onClick={props.clickl} value={props.index} className="arrow1 arrow-prev"></button><button href="" onClick={props.clickr} value={props.index} className="arrow1 arrow-next"></button>            
   </div>
)

export default Item;
