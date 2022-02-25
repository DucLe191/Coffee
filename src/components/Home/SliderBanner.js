import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Slider1 from '../../assets/img/slider_1.png' 
import Slider2 from '../../assets/img/slider_2.png' 
import '../../assets/styles/Home.scss'

function SliderBanner() {
    return(
        <div className='slider_banner'>
            <OwlCarousel items={1}  
                className="owl-theme"  
                nav  
            >
                <div className='item'> <img src={Slider1} /> </div>
                <div className='item'> <img src={Slider2} /> </div>
            </OwlCarousel>
        </div>
    )
}

export default SliderBanner;