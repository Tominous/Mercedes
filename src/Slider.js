import React from 'react'
import HRtext from './HRtext'
import './style/Slider.css'


function clickRight(e){
    let slides = document.querySelectorAll('.slide');
    let currentSlide=+e.target.value;
    let nextSlide=((+e.target.value+1)%slides.length)
	slides[currentSlide].className = 'slide';
	slides[nextSlide].className = 'slide showing';
}

function clickLeft(e){
    let slides = document.querySelectorAll('.slide');
    let currentSlide=+e.target.value;
    let nextSlide;
    currentSlide-1>=0?
    nextSlide=((+e.target.value-1)):
    nextSlide=((+e.target.value-1+slides.length));
	slides[currentSlide].className = 'slide';
	slides[nextSlide].className = 'slide showing';
}
const item = [
    {
        title: 'Sales launch of the new 4-Door Coupé.',
        subtitle: 'Mercedes-AMG GT 43 4MATIC+.',
        text:'Fuel consumption combined: 9.4 - 9.1 l/100 km | CO2 emissions combined: 215 - 209 g/km | ',
        class: 'relat',
        src: 'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/GT/GT%204-Door%20Coupe/GT43/X290-43-ext-AMG17077_sx032-hd.jpg/_jcr_content/renditions/original./X290-43-ext-AMG17077_sx032-hd.jpg'
    },
    {
        title: 'Sales launch of the new 4-Door Coupé.',
        subtitle: 'Mercedes-AMG GT 53 4MATIC+.',
        text:'Fuel consumption combined: 9.4 - 9.1 l/100 km | CO2 emissions combined: 215 - 209 g/km | ',
        class: 'right-relat',
        src: 'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/GT/GT%204-Door%20Coupe/GT53/header-X290-53-AMG17077_sx005-hd.jpg/_jcr_content/renditions/original./header-X290-53-AMG17077_sx005-hd.jpg'
    },
    {
        title: 'Drive in total Comfort and Style.',
        subtitle: 'AMG Performance Wear',
        text:'Fuel consumption combined: 11.4 l/100 km | CO2 emissions combined: 261 g/km | ',
        class: 'relat ',
        src: 'https://www.mercedes-amg.com/dam/hq/content-pages/partner/APW_6-AMG-GT_1920x1080_hd.jpg/_jcr_content/renditions/original./APW_6-AMG-GT_1920x1080_hd.jpg'
    },
    {
        title: '#LIFEISARACE',
        subtitle: 'Mercedes-AMG GT 4-Door Coupé.',
        text:'Fuel consumption combined: 11.3 l/100 km | CO2 emissions combined: 257 g/km | ',
        class: 'black relat',
        src: 'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/GT/GT%204-Door%20Coupe/GT63S/X290-63S-ext-youtube-teaser-three_01-hd.jpg/_jcr_content/renditions/original./X290-63S-ext-youtube-teaser-three_01-hd.jpg'
    },
    {
        title: 'New entry-level model opens up the world of driving performance.',
        subtitle: 'Mercedes-AMG A 35 4MATIC.',
        text:'Fuel consumption combined: 7.4 - 7.3 l/100 km | CO2 emissions combined: 169 - 167 g/km | ',
        class: 'black-fone relat',
        src: 'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/A-class/Hatchback/A35/mercedes-benz-a-class-w177-mercedesamg-contentpager-2730x1536-09-2018.jpg/_jcr_content/renditions/original./mercedes-benz-a-class-w177-mercedesamg-contentpager-2730x1536-09-2018.jpg'
    } ,
]

 const Slider=()=>{
     return(
        <div className='clock-slider'>
            <div className="slider">
                {item.map((e,index)=>{
                    return(
                        <div className='slide' key={index}   >
                                <div className={e.class} >
                                    <div>
                                        <HRtext title={e.title} subtitle={e.subtitle}  ><a className='nonhover more'>Learn more</a></HRtext>
                                    </div>
                                </div>
                                <div className='slider-text color-grey'>  
                                    <p className='black-fone'>{e.text}<a href=''>Emission Statement [1]</a></p>
                                </div>
                                <img src={e.src} alt=""></img>
                                <button href="" onClick={clickLeft} value={index} className="arrow arrow-prev"></button>
                                <button href="" onClick={clickRight} value={index} className="arrow arrow-next"></button>
                        </div>
                    )
                })}  
            </div>
        </div>
     )
 }
 export default Slider;