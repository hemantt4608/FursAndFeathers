import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './Slider.css'

import img1 from './Images/ten.jpg'
import img3 from './Images/nine.jpg'
import img2 from './Images/four.jpg'

export const Slider = ()=>{
    return(
        <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img src={img1} alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src={img2} alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src={img3} alt="Phones" />
                
           </div>
            
            
        </Carousel>
    )
}