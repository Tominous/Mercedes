import React from 'react'
import './style/Content.css'
import  Items from './Items'
import AMG50Years from './AMG50Years'
import HRtext from './HRtext'
import Slider from './Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function active(){
    const e=document.querySelector('.click')
    e.className=='noactive click'? e.className='active click':e.className='noactive click';
}
function clickRight0(e){
    let slides = document.querySelectorAll('.slide0');
    let currentSlide=+e.target.value;
    let nextSlide=((+e.target.value+1)%slides.length)
	slides[currentSlide].className = ' items-item slide0';
    slides[nextSlide].className = ' items-item slide0 showing';
   
}

function clickLeft0(e){
    let slides = document.querySelectorAll('.slide0');
    let currentSlide=+e.target.value;
    let nextSlide;
    currentSlide-1>=0?
    nextSlide=((+e.target.value-1)):
    nextSlide=((+e.target.value-1+slides.length));
	slides[currentSlide].className = 'items-item  slide0';
    slides[nextSlide].className = ' items-item  slide0 showing';
}
window.onload=()=>{
    document.querySelector('.slide0').className='first items-item slide0';
    document.querySelectorAll('.slide0').forEach((e)=>{
        e.className==='first items-item slide0'?e.className=" items-item slide0 showing":e.className='items-item slide0'
    })
    document.querySelector('.slide1').className='first items-item slide1';
    document.querySelectorAll('.slide1').forEach((e)=>{
        e.className==='first items-item slide1'?e.className=" items-item slide1 showing":e.className='items-item slide1'
    })
    document.querySelector('.slide2').className='first items-item slide2';
    document.querySelectorAll('.slide2').forEach((e)=>{
        e.className==='first items-item slide2'?e.className=" items-item slide2 showing":e.className='items-item slide2'
    })
    document.querySelector('.slide3').className='first items-item slide3';
    document.querySelectorAll('.slide3').forEach((e)=>{
        e.className==='first items-item slide3'?e.className=" items-item slide3 showing":e.className='items-item slide3'
    })
    document.querySelector('.slide4').className='first items-item slide4';
    document.querySelectorAll('.slide4').forEach((e)=>{
        e.className==='first items-item slide4'?e.className=" items-item slide4 showing":e.className='items-item slide4'
    })

}
const param=[
    {
        src:'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/E-class/Cabriolet/AMG17164_sx009_ext_comp_v008_fb_1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
        title:'The new Mercedes-AMG E 53 4MATIC+ Cabriolet.',
        text:'Fuel consumption combined: 8.9 - 8.8 l/100 km | CO2 emissions combined: 204 - 200 g/km | ',
        href:'#'
    },
    {
        src:'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/CLS/Coupe/CLS53/AMG17164_sx003a_ext_comp_v018_vb_1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
        title:'The new Mercedes-AMG CLS 53 4MATIC+ Coupé.',
        text:'Fuel consumption combined: 8.9 - 8.7 l/100 km | CO2 emissions combined: 203 - 200 g/km | ',
        href:'#'
    },
    {
        src:'https://www.mercedes-amg.com/dam/hq/content-pages/related_content-fahrzeug_uebersicht.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
        title:'Vehicle overview.',
        text:'Fuel consumption combined: 14.2 - 8.2 l/100 km | CO2 emissions combined: 325 - 186 g/km | ',
        href:'#'
    }
]
const param1=[
    { 
        title:'Driving Perfomance.',
        var:'items slider1',
        clickl:(e)=>{
            let slides = document.querySelectorAll('.slide1');
            let currentSlide=+e.target.value;
            let nextSlide=((+e.target.value+1)%slides.length)
            slides[currentSlide].className = ' items-item slide1';
            slides[nextSlide].className = ' items-item slide1 showing';
           
        },
        clickr: (e)=>{
            let slides = document.querySelectorAll('.slide1');
            let currentSlide=+e.target.value;
            let nextSlide;
            currentSlide-1>=0?
            nextSlide=((+e.target.value-1)):
            nextSlide=((+e.target.value-1+slides.length));
            slides[currentSlide].className = 'items-item  slide1';
            slides[nextSlide].className = ' items-item  slide1 showing';
        },
        grandparent:'items-item slide1',
        param:[
            {
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/track_pace/track-pace_stageslider3_hd.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'AMG TRACK PAGE.',
                text:'Fuel consumption combined: 12.4 l/100 km | CO2 emissions combined: 284 g/km | ',
                href:'#'
            },{
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/the_story/the_history-2012MBM23.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'AMG The Story.',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/one_attitude/one_attetitude-08.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'AMG One Attribute.',
                text:'Fuel consumption combined: 11.5 l/100 km | CO2 emissions combined: 262 g/km | ',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/future_performance/future-performance-stageslider.jpg/_jcr_content/renditions/original.image_file.716.403.file/future-performance-stageslider.jpg',
                title:'AMG Future Performance',
                href:'#'
            }
        ]
    },
    { 
        title:'Press Club',
        var:'items slider2',
        clickl:(e)=>{
            let slides = document.querySelectorAll('.slide2');
            let currentSlide=+e.target.value;
            let nextSlide=((+e.target.value+1)%slides.length)
            slides[currentSlide].className = ' items-item slide2';
            slides[nextSlide].className = ' items-item slide2 showing';
           
        },
        clickr: (e)=>{
            let slides = document.querySelectorAll('.slide2');
            let currentSlide=+e.target.value;
            let nextSlide;
            currentSlide-1>=0?
            nextSlide=((+e.target.value-1)):
            nextSlide=((+e.target.value-1+slides.length));
            slides[currentSlide].className = 'items-item  slide2';
            slides[nextSlide].className = ' items-item  slide2 showing';
        },
        grandparent:'items-item slide2',
        param:[
            {
                src:'https://www.mercedes-amg.com/dam/hq/Press/project-one-prototype-testing/X1_ext_IMG_0219-hd.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'Mercedes-AMG Project ONE Prototype Testing ',
                href:'#'
            },{
                src:'https://www.mercedes-amg.com/dam/hq/Press/mercedes-amg-a-35-4matic/W177-A35-ext-18C0618_036-hd.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'The new Mercedes-AMG A 35 4MATIC ',
                text:'Fuel consumption combined: 7.4 - 7.3 l/100 km | CO2 emissions combined: 169 - 167 g/km | ',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/Press/Mercedes-AMG-GT-43-4MATIC--4-door-Coup--/X290-43-ext-18C0686_37-hd.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'Sales launch of the new Mercedes-AMG GT 4-door Coupé models ',
                text:'Fuel consumption combined: 9.4 - 9.1 l/100 km | CO2 emissions combined: 215 - 209 g/km | ',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/Press/Mercedes-AMG%2053-Series%20Campaign/18C0425_03.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'The campaign for the new Mercedes-AMG 53 series models',
                text:'Fuel consumption combined: 8.8 - 8.7 l/100 km | CO2 emissions combined: 203 - 200 g/km | ',
                href:'#'
            }
        ]
    },
    { 
        title:'Experience AMG',
        var:'items slider3',
        clickl:(e)=>{
            let slides = document.querySelectorAll('.slide3');
            let currentSlide=+e.target.value;
            let nextSlide=((+e.target.value+1)%slides.length)
            slides[currentSlide].className = ' items-item slide3';
            slides[nextSlide].className = ' items-item slide3 showing';
           
        },
        clickr: (e)=>{
            let slides = document.querySelectorAll('.slide3');
            let currentSlide=+e.target.value;
            let nextSlide;
            currentSlide-1>=0?
            nextSlide=((+e.target.value-1)):
            nextSlide=((+e.target.value-1+slides.length));
            slides[currentSlide].className = 'items-item  slide3';
            slides[nextSlide].className = ' items-item  slide3 showing';
        },
        grandparent:'items-item slide3',
        param:[
            {
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/private_lounge/private_lounge-stageslider.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'Private Lounge.',
                text:'Fuel consumption combined: 11.5 l/100 km | CO2 emissions combined: 262 g/km | ',
                href:'#'
            },{
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/the_story/content-driving_academy-2016_AMG_PICTURES00034.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'Driving Academy.',
                text:'Fuel consumption combined: 11.5 l/100 km | CO2 emissions combined: 262 g/km |  ',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/performance_center/performance_center-stageslider.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'Performance Center.',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/content-pages/partner/APW_6-AMG-GT_1920x1080_hd.jpg/_jcr_content/renditions/original.image_file.716.403.file/APW_6-AMG-GT_1920x1080_hd.jpg',
                title:'AMG Performance Wear.',
                text:'Fuel consumption combined: 11.4 l/100 km | CO2 emissions combined: 261 g/km | ',
                href:'#'
            }
        ]
    },
    { 
        title:'Webspecials.',
        var:'items items-no-wrap slider4',
        grandparent:'items-item slide4',
        clickl:(e)=>{
            let slides = document.querySelectorAll('.slide4');
            let currentSlide=+e.target.value;
            let nextSlide=((+e.target.value+1)%slides.length)
            slides[currentSlide].className = ' items-item slide4';
            slides[nextSlide].className = ' items-item slide4 showing';
           
        },
        clickr: (e)=>{
            let slides = document.querySelectorAll('.slide4');
            let currentSlide=+e.target.value;
            let nextSlide;
            currentSlide-1>=0?
            nextSlide=((+e.target.value-1)):
            nextSlide=((+e.target.value-1+slides.length));
            slides[currentSlide].className = 'items-item  slide4';
            slides[nextSlide].className = ' items-item  slide4 showing';
        },
        param:[
            {
                src:'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/GT/GT%204-Door%20Coupe/GT63S/X290-63S-ext-AMG17077_sx037-hd.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'#LIFEISARACE. Mercedes-AMG GT 4-Door Coupé.',
                text:'Fuel consumption combined: 12.5 - 11.3 l/100 km | CO2 emissions combined: 284 - 257 g/km | ',
                href:'#'
            },{
                src:'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/GT/GT4/c190-gt4-ext-2017_AMG_PICTURE00286-hd.jpg/_jcr_content/renditions/original.image_file.716.403.file/c190-gt4-ext-2017_AMG_PICTURE00286-hd.jpg',
                title:'Mercedes-AMG GT Family Webspecial.',
                text:'Fuel consumption combined: 12.4 l/100 km | CO2 emissions combined: 284 g/km | ',
                href:'#'
            },
            {
                src:'https://www.mercedes-amg.com/dam/hq/model-pages/Vehicles/S-class/Sedan/S63/V222-63-ext-799-2017_AMG_PICTURE00196-hd.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.716.403.file/cq5dam.web.1280.1280.jpg',
                title:'Mercedes-AMG S 63 Webspecial.',
                text:'Fuel consumption combined: 11.2 l/100 km | CO2 emissions combined: 255 g/km | ',
                href:'#'
            }
        ]
    }
]
export default class Content extends React.Component{
    render(){
        return(
            <div className='margin main-content'>
                <div className='back share' >
                    <div className='noactive click' onClick={active}>
                        <a className='nonhover'>
                        <FontAwesomeIcon  icon={['fas','share-alt']} />
                        </a>
                        </div>
                    <ul className='submenu'>
                        <li >    
                            <a>
                                <FontAwesomeIcon icon={['fab','facebook']} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={['fab','twitter']} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={['fab','google-plus']} />
                            </a>
                        </li>
                    </ul>
                </div>
                <Slider/>
                <Items param={param} class={'items items-no-wrap slider0'} clickl={clickLeft0} clickr={clickRight0} grandparent='items-item slide0' title='Vehicles.'/>
                <AMG50Years/>
                <HRtext title='About AMG'/>
                {param1.map((e,index)=>{
                        return(<Items  title={e.title} param={e.param} clickl={e.clickl} clickr={e.clickr} class={e.var} grandparent={e.grandparent} key={index} ></Items>)
                })}
            </div>
        )
    }
}