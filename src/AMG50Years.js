import React from 'react'
import HRtext from './HRtext'
const AMG50Years=()=>{
    return(
        <div className='parbase-text'>
            <HRtext title='50 Years AMG' subtitle='Driven by Performance.'/>
            <div className='subtext color-grey'><p>We’ve spent the last 50 years being driven by a powerful conviction. From the very start, AMG has been characterized by the courage and passion of its founders Hans Werner Aufrecht and Erhard Melcher. Then as now, we question everything and accept no limits. We are constantly seeking the next challenge. We call this: Driving Performance. All over the world, we have found likeminded individuals and, together with them, we celebrate this inner drive that breaks through every barrier – and makes every single AMG a statement of Driving Performance. #AMG50Years</p>
            </div>
            <div className='video'><iframe src='https://www.youtube.com/embed/iH5eTq_PpUU?controls=1&modestbranding=1&showinfo=0&iv_load_policy=1&rel=0&autoplay=1&enablejsapi=1&origin=https%3A%2F%2Fwww.mercedes-amg.com&widgetid=1'></iframe>
            </div>
        </div>
    )
}
export default AMG50Years;